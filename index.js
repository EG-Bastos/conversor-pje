const express = require('express');
const app = express();
const router = require('./routes/routes')
const cors = require('cors')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/', router)

app.listen(process.env.PORT || 3000)