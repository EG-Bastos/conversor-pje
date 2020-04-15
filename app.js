// instalação: 
    // npm install --save simple-excel-to-json
    // npm install -- save json2xls

/*Instruções: baixar o arquivo excel do site to Tribunal e salvá-lo no formato xlsx com o nome arquivobase.xlsx 
  no mesmo diretório da aplicação;
  Abrir o terminal no diretório do projeto e rodar o comando node app.js;
 */


const parser = require('simple-excel-to-json');
const json2xls = require('json2xls');
const fs = require('fs');


const doc = parser.parseXls2Json('arquivobase.xlsx')[0];

// Eduardo
let eduardo = new Array();
for (let index = 0; index < doc.length; index++) {
    const element = doc[index];
    let digito = parseInt(element['Feito'][6]);
    if (digito === 7 | digito === 8| digito === 9) {
        eduardo.push(element);
    }
   
};
// Colocando em ordem decrescente
eduardo.sort((a, b) => {
    let tempoa = parseInt(a['Tempo_na_Tarefa']);
    let tempob = parseInt(b['Tempo_na_Tarefa']);
    return tempob - tempoa;
});

// Alan
let alan = new Array();
for (let index = 0; index < doc.length; index++) {
    const element = doc[index];
    let digito = parseInt(element['Feito'][6]);
    if (digito === 1 | digito === 2| digito === 3) {
        alan.push(element);
    }
   
};

alan.sort((a, b) => {
    let tempoa = parseInt(a['Tempo_na_Tarefa']);
    let tempob = parseInt(b['Tempo_na_Tarefa']);
    return tempob - tempoa;
});

//Alessandra
let alessandra = new Array();
for (let index = 0; index < doc.length; index++) {
    const element = doc[index];
    let digito = parseInt(element['Feito'][6]);
    if (digito === 4 | digito === 5| digito === 6) {
        alessandra.push(element);
    }
   
};

alessandra.sort((a, b) => {
    let tempoa = parseInt(a['Tempo_na_Tarefa']);
    let tempob = parseInt(b['Tempo_na_Tarefa']);
    return tempob - tempoa;
});


// Carmem
let carmem = new Array();
for (let index = 0; index < doc.length; index++) {
    const element = doc[index];
    let digito = parseInt(element['Feito'][6]);
    if (digito === 0) {
        carmem.push(element);
    }
   
};

carmem.sort((a, b) => {
    let tempoa = parseInt(a['Tempo_na_Tarefa']);
    let tempob = parseInt(b['Tempo_na_Tarefa']);
    return tempob - tempoa;
});

// Convertendo de volta:

let xlseduardo =  json2xls(eduardo);
let xlsalan = json2xls(alan);
let xlsalessandra = json2xls(alessandra);
let xlscarmem = json2xls(carmem);

fs.writeFileSync('eduardo.xlsx', xlseduardo, 'binary');
fs.writeFileSync('alan.xlsx', xlsalan, 'binary');
fs.writeFileSync('alessandra.xlsx', xlsalessandra, 'binary');
fs.writeFileSync('carmem.xlsx', xlscarmem, 'binary');