const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Para gerar tokens de redefinição de senha
const nodemailer = require('nodemailer');

const server = express();
const port = 3000;
server.use(express.json());
server.use(cors());

const prisma = new PrismaClient();
const jwtSecret = process.env.JWT_SECRET || 'your_super_secret_key';

// Configurar o transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu_email@gmail.com',
    pass: 'sua_senha_do_email'
  }
});

// Função para enviar email com o token de redefinição de senha
const sendResetEmail = async (email, token) => {
  const mailOptions = {
    from: 'seu_email@gmail.com',
    to: email,
    subject: 'Redefinição de Senha',
    text: `Use o seguinte token para redefinir sua senha: ${token}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};

// Rota para cadastrar um novo usuário
server.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email já existe.' });
    }
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Rota para realizar login
server.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas.' });
  }
});

// Rota para solicitar redefinição de senha
server.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hora a partir de agora

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordTokenExpiry: resetTokenExpiry
      }
    });

    // Enviar email com o token
    await sendResetEmail(email, resetToken);

    res.json({ message: 'Token de redefinição de senha enviado com sucesso.' });
  } catch (error) {
    console.error('Error generating reset token:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});


// Rota para redefinir a senha
server.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordTokenExpiry: {
          gt: new Date()
        }
      }
    });

    if (!user) {
      return res.status(400).json({ error: 'Token inválido ou expirado.' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordTokenExpiry: null
      }
    });

    res.json({ message: 'Senha redefinida com sucesso.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Middleware para verificar token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json({ error: 'Acesso negado.' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido.' });
    req.user = user;
    next();
  });
};



// Função para gerar token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
};

server.listen(port, () => console.log(`Server is running on port ${port}!`));
