const express = require('express');
// config is for use to set the envoirement config file.
const config = require('config');

// This is for import the custome middleware for Authentication.
const authentication = require('./authentication');

const app = express();
app.use(express.json());

// The below line is for use the created custome middleware for Authentication.
app.use(authentication);

//Set envoirement
console.log(app.get('env'));
console.log(process.env.NODE_ENV);

// Test the config
console.log("Envoirment Name:" + config.get('name'));
console.log("Mail Server Name:" + config.get('Mail_Server.host'));


app.get('/', (req, res) => {
    res.send({id:1});
})

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`This code is running on port ${port} ...`));