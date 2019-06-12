const mongoose = require("mongoose");
// string de conexao: mongodb://dominio:porta/nome_database
const MONGO_URL = "mongodb://localhost:27017/reprograma";
//string de conexao:
//mongodb://dominio:porta/nome_database
function connect () {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true},
    function (error) {
      // TODO: conectar no nosso mongo usando a MONGO_URL
        if(error) {
            console.log('Deu erro: ', error)
        } else{
            console.log('Conectamos no mongodb!!')
        }
    }
    );
}

module.exports = { connect}
