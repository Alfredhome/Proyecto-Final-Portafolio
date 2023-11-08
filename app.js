

const express = require('express')
const hbs = require('hbs');


require('dotenv').config();

const port = process.env.PORT
const app = express()

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('index')
})


app.get('/Educacion', (req, res) => {
    res.render('Educacion')
})
app.get('/Habilidades', (req, res) => {
    res.render('Habilidades')
})

app.get('/Contacto', (req, res) => {
    res.render('Contacto')
})

app.get('/Proyectos', (req, res) => {
    res.render('Proyectos')
})

app.get('/Proyecto1', (req, res) => {
    res.render('Proyecto1')
})


app.get('/proyecto2', (req, res) => {
    res.render('proyecto2')
})

app.get('/Proyecto3', (req, res) => {
    res.render('Proyecto3')
})

app.get('/proyecto4', (req, res) => {
    res.render('proyecto4')
})

app.get('/proyecto5', (req, res) => {
    res.render('proyecto5')
})

app.get('/proyecto6', (req, res) => {
    res.render('proyecto6')
})
app.get('/proyecto7', (req, res) => {
    res.render('proyecto7')
})

app.get('/SobreMi', (req, res) => {
    res.render('SobreMi')
})

app.get('*', (req, res) => {
    res.render('404.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`);

})