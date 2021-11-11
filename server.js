const Contenedor = require('./classes/Contenedor');
const contenedor = new Contenedor();
const express = require('express');

const app = express();
const PORT = process.env.PORT||8080;

const server = app.listen(PORT, ()=>{
    console.log("Servidor escuchando en: " +PORT)
})

app.get('/',(req,res)=>{
    res.send('Bienvenido al PokeShop');
})

app.get('/productos',(req,res)=>{
    contenedor.getAll()
    .then(
        result=>{
        if(result.status ==="success"){
           res.status(200).send(result.event);
        }else{
           res.status(500).send(result.message);
        }
    })
})

app.get('/productoRandom',(req,res)=>{
    contenedor.getRandom()
    .then(
        result=>{
        if(result.status ==="success"){
           res.status(200).send(result.event);
        }else{
           res.status(500).send(result.message);
        }
    })
})