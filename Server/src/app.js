const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan')



// MIDLEWORDS
server.use(express.json()); // parseo el json q viene del cliente
server.use(morgan('dev'));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
      res.header(
         'Access-Control-Allow-Methods',
         'GET, POST, OPTIONS, PUT, DELETE'
         );
         next();
      });

// MIDLEWORD DE LAS RUTAS
server.use("/rickandmorty", router); // para tener esta ruta unica antes de la otras



module.exports = server;