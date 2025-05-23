const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contato = require('./Contatos.js'); // Certifique-se de que o nome está certo

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/contatosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Rota POST para salvar contato
app.post('/api/contato', async (req, res) => {
  try {
    const { nome, email, mensagem } = req.body;
    console.log('Dados recebidos:', nome, email, mensagem);

    const novoContato = new Contato({ nome, email, mensagem });
    const resultado = await novoContato.save();

    console.log('Contato salvo:', resultado);

    res.status(201).json({ mensagem: 'Contato salvo com sucesso!' });
  } catch (err) {
    console.error('Erro ao salvar o contato:', err);
    res.status(500).json({ erro: 'Erro ao salvar no MongoDB' });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
