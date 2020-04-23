const multer = require('multer');
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, 'arquivobase')
    }
})
var upload = multer({
    storage: storage
})

module.exports = upload