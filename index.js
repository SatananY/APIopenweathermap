const express =require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/gettemp',(req,res)=>{
   
request('https://api.openweathermap.org/data/2.5/weather?q=ratchaburi&appid=52c9656753d0778389fdbbf7794de226&units=metric', (err,response,body) => {
    console.log(err);
    console.log("Status Code: " + response.statusCode);
    res.send(body); });
})


      

app.listen(3000, ()=>{
    console.log("Severs complete in port 3000");
});