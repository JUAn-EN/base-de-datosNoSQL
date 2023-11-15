
// MongoDB Playground

// Selecciona la base de datos a utilizar.
use('tiendaVideojuegosDB');

// Inserta algunos documentos en la colección de videojuegos.
db.getCollection('videojuegos').insertMany([
    { 'nombre': 'The Legend of Zelda: Breath of the Wild', 'plataforma': 'Nintendo Switch', 'genero': 'Aventura', 'lanzamiento': 2017, 'precio': 59.99 },
    { 'nombre': 'FIFA 22', 'plataforma': 'PlayStation 5', 'genero': 'Deportes', 'lanzamiento': 2021, 'precio': 69.99 },
    { 'nombre': 'Cyberpunk 2077', 'plataforma': 'PC', 'genero': 'RPG', 'lanzamiento': 2020, 'precio': 49.99 },
    { 'nombre': 'GtaV', 'plataforma': 'play3,4,6 y pc', 'genero': 'acción', 'lanzamiento': 2013, 'precio': 70.00 },
    { 'nombre': 'gragon ball kakarot', 'plataforma': 'play4,5', 'genero': 'acción', 'lanzamiento': 2020, 'precio': 89.99 }
  ]);
  

// Consulta todos los videojuegos en la colección.
const documentosInsertados = db.getCollection('videojuegos').find().toArray();

// Imprime los documentos insertados de la base de datos que cree
documentosInsertados.forEach(documento => {
  printjson(documento);
});

// Actualiza el precio del videojuego con nombre 'FIFA 22, o otras actualizaciones que quisieramos hacer un ejemplo primero el One que es para actualizar 1 dato
db.getCollection('videojuegos').updateOne(
  { 'nombre': 'FIFA 22' },
  { $set: { 'precio': 79.99 } }
);
//asi editasmos varias cosas a el mismo tiempo con el many
db.getCollection('videojuegos').updateMany(
    {},
    [
      { $set: { 'precio': 79.99, 'plataforma': 'PlayStation 5 Pro' }, filter: { 'nombre': 'FIFA 22' } },
      { $set: { 'precio': 59.99, 'plataforma': 'Xbox Series X' }, filter: { 'nombre': 'Cyberpunk 2077' } },
    ]
  );
  

// Consulta el videojuego actualizado.
const videojuegoActualizado = db.getCollection('videojuegos').findOne({ 'nombre': 'FIFA 22' });
printjson(videojuegoActualizado);
// Consulta solo los dos videojuegos actualizados.
const videojuegosEspecificos = db.getCollection('videojuegos').find({
    'nombre': {
      $in: ['FIFA 22', 'Cyberpunk 2077']
    }
  }).toArray();
  
  videojuegosEspecificos.forEach(videojuego => {
    printjson(videojuego);
  });
  
// Elimina el videojuego con nombre 'Cyberpunk 2077'.
db.getCollection('videojuegos').deleteOne({ 'nombre': 'Cyberpunk 2077' });
// Elimina dos juegos específicos o mas este es un ejemplo.
db.getCollection('videojuegos').deleteMany({
    'nombre': {
      $in: ['Cyberpunk 2077', 'GtaV']
    }
  });
  
// Consulta todos los videojuegos después de la eliminación.
const videojuegosDespuesDeEliminar = db.getCollection('videojuegos').find();
videojuegosDespuesDeEliminar.forEach(videojuego => {
  printjson(videojuego);
});
