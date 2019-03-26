const express = require('express');
const helmet = require('helmet');
const zoos = require('../zoosModel.js');

const server = express();

server.use(express.json());
server.use(helmet())


const noId = `Id not found`

  // GET zoo list
  server.get('/', (req, res)=>{
    zoos.find()
      .then(zoos =>{
        res.status(200).json(zoos);
      })
      .catch(err => res.status(500).json(err));
  });

  // CREATE zoo
  server.post('/', (req, res)=>{
    const zoo = req.body;
    zoos.add(zoo)
        .then(ids =>{
        res.status(201).json(ids[0]);
      })
      .catch(err =>{
        res.status(500).json(`Error: duplicate name keys not permitted.`)
      });
  });













const port = 8000;
 server.listen(port, () => console.log(`server rolling on port ${port}`));
