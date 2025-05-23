const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  mensagem: String,
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contato', ContatoSchema);
