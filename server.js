import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req,res) =>{
  res.render('index', {
    content: '<em>Loading...</em>'
  });
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () =>{
  console.info('express listening on port', config.port);
});

