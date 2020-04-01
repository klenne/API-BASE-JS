const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema;
const schema = new Schema({
    imagem: {
      type: String,
      required: true,
      trim: true
    },
    nome: {
      type: String,
      required: true
    },
    preco:{
      type:Number,
      required:true
    }
  });


  
module.exports = mongoose.model('Products', schema);