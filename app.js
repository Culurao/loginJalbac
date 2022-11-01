
const express = require('express')
const app = express()
const hbs = require('hbs')
const cors = require('cors')
const port = 8181

//Especificar el directorio público
app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function(err) {})
app.set("view engine", 'hbs')
app.set('views', __dirname + '/views')



//Verificar si el puerto está siendo escuchado
app.listen(port, () => {
    console.log(`Escando por el puerto ${port}`)
})

//Paginas 

app.get('/home', (req, res) =>{  
    res.render('home', {
        nombre: 'home'
    })
});

app.get('/contacto', (req, res) =>{
    res.render('contacto', {
        nombre: 'contacto'
    })
})

app.get('/login', (req, res) =>{  
    res.render('login', {
        nombre: 'login'
    })
});

app.get('*', (req, res) =>{
    res.render('404', {
        nombre: 'Pagina no encontrada'
    })
})