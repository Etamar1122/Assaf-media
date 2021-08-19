const express = require('express');
const server = express();
const path = require('path');
const Sequelize  = require('sequelize');


const sequelize = new Sequelize('mysql://root:@localhost/assafmedia_db')

server.use(express.static(path.join(__dirname,'dist')));
server.use(express.static(path.join(__dirname,'node_modules')));


server.use(express.json())
server.use(express.urlencoded({ extended: false }))



server.post('/', function (req, res) {
  
        sequelize
        .query(`INSERT INTO users_db VALUES(null, '${req.body.user_name}' , '${req.body.user_lastname}'  , '${req.body.user_phonenumber}' ,'${req.body.user_email}', '${req.body.user_address}', '${req.body.user_city}')`)
        res.end();
        return 
    
})


const port = 3000
server.listen(port, function(){
    console.log(`Running server on port ${port}`)
})