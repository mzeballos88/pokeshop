const Contenedor = require('./classes/Contenedor');
const contenedor = new Contenedor();

/*  contenedor.save({title:'Pikachu', price: 350, thumbnail:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',})
.then(result =>{
    console.log(result.message);
}) */
/*  contenedor.save({title:'Charmander', price: 800, thumbnail:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',})
.then(result =>{
    console.log(result.message);
})   */

contenedor.save({title:'Squirtle', price: 582, thumbnail:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',})
.then(result =>{
    console.log(result.message);
})

/*  contenedor.getAll()
.then(result =>{
    console.log(result)
})  */

/*  contenedor.getById('96918')
.then(result =>{
    console.log(result.event)
})  */

/*   contenedor.deleteById('28174')
.then(result =>{
    console.log(result.message)
})  
 */