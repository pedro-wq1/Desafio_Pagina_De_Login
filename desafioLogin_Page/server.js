const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const SEGREDO = process.env.JWT_SECRET || 'segredo_do_desafio';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const usuario = {
    id: 1,
    nome: 'Administrador',
    email: 'admin@teste.com',
    senha: '123456'
};

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
    }

    if (email !== usuario.email || senha !== usuario.senha) {
        return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
    }

    const access_token = jwt.sign(
        { id: usuario.id, nome: usuario.nome, email: usuario.email },
        SEGREDO,
        { expiresIn: '1h' }
    );

    res.json({
        mensagem: 'Login realizado com sucesso!',
        access_token: access_token
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
