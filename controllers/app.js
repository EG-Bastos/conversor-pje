const fs = require('fs');
const path = require('path')
const Planilha = require('./Planilha')

const user = new Planilha()

function converte(arr) {
    const planilhaFinal = user.ordena(arr)
    fs.writeFileSync('saida/planilha-pje.xlsx', planilhaFinal, 'binary');
};

module.exports = converte;

