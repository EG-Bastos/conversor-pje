const excelToJson = require('simple-excel-to-json');
const jsonToExcel = require('json2xls');
const path = require('path')

class Planilha {
    ordena(arr) {
        const arquivoUpado = path.resolve(__dirname, '..', 'uploads/arquivobase.xlsx')

        const planilhaSecretaria = excelToJson.parseXls2Json(arquivoUpado)[0];

        const planilhaFiltrada = planilhaSecretaria.filter(processo => {
            const digito = parseInt(processo['Feito'][6])
             return arr.indexOf(digito) !== -1
        })

        const planilhaOrdenada = planilhaFiltrada.sort((a, b) => {
            let tempoA = parseInt(a['Tempo_na_Tarefa'])
            let tempoB = parseInt(b['Tempo_na_Tarefa'])
            return tempoB - tempoA
        })

        return jsonToExcel(planilhaOrdenada) // retorna a planilha já filtrada, ordenada e convertida para xls
    }
}

module.exports = Planilha