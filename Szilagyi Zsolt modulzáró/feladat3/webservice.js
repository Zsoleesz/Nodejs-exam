const express = require('express');
const app = express();
const port = 8080;

app.get('/ping', (req, res) => {
    res.send("pong");
});

app.get('/add', (req, res)=>{
    const querystring = require(querystring);
    res.send(querystring);

});

app.use('/static-files', express.static("static"));

app.listen(port, () => {
    console.log(`A szerver a ${port} porton elindult.`);
});