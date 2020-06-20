const express = require('express');
const router = express.Router();
const upload = require('../controllers/multerconfig')
const path = require('path')
const converte = require('../controllers/app')

router.get('/', (req, res) => {
    res.render('inicial');
})

router.post('/', upload.single('arquivo'), async (req, res) => {
    const digitos = Object.values(req.body).map(digito => parseInt(digito))
    if (digitos.length === 0) {
        return res.redirect('/')
    } else {
        converte(digitos)
        const arquivo = path.resolve(__dirname, '..', 'saida', 'planilha-pje.xlsx')
        return res.download(arquivo)
    }
})

module.exports = router; 