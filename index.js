const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet())


const port = 8000;
 server.listen(port, () => console.log(`server rolling on port ${port}`));
