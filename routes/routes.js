const express = require('express');
const router = express.Router();
const upload = require('../models/multerconfig')
const path = require('path')

router.get('/', (req, res) => {
    res.render('inicial');
})

router.post('/', upload.single('arquivo'), (req, res) => {
    const arquivo = path.resolve(__dirname, '..', 'uploads/arquivobase')
    const converte = require('../models/app')
    converte()
    res.render('saida')
})

module.exports = router; 