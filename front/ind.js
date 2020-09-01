const express = require('express');
const app = express();
app.get('/',function (req,res){
res.send("Privetule");
}) ;
app.listen(3000);