const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Définition du schéma utilisateur
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 phone : {
     type: String,
        required: true,
 
  },
});

// Exportation du modèle
module.exports = model('User', userSchema);
