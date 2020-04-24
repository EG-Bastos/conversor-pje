const express = require('express');
const router = express.Router();
const upload = require('../models/multerconfig')
const path = require('path')

router.get('/', (req, res) => {
    res.render('inicial');
})

router.post('/', upload.single('arquivo'), async (req, res) => {
    const converte = require('../models/app')
    converte()
    const arquivo = path.resolve(__dirname, '..', 'saida/eduardo.xlsx')
    await res.download(arquivo)
})

module.exports = router; 