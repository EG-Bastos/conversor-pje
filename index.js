const express = require('express');
const app = express();
const router = require('./routes/routes')
const cors = require('cors')

app.use(cors());

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', router)

app.listen(3000, () => console.log('Servidor rodando na porta 3000...'))