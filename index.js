
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const urlEncondedParser = bodyParser.urlencoded({ extended: false })

function somar(numeroUm, numeroDois) {
    return parseInt(numeroUm) + parseInt(numeroDois);
}

function main() {
    console.log('Hello World')

    var numUm = 10;
    var numDois = 22;
    var textoSimples = "algum texto";


    const resultado = somar(numUm, numDois);
    console.log('Resultado é', resultado)
}

app.get('/', function (req, res) {
    res.send('Hello World')
})


app.post('/calc', urlEncondedParser, function(req, res){
    console.log('entrou no post', req.body)
    const resultado = somar(req.body.numeroUm, req.body.numeroDois);

    res.send({ resultado: resultado })
})
  
app.listen(3000)