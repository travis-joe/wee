/**
 * Created by apple on 2/13/16.
 */
var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware');
//app.get('/',function(req,res){
//   res.send('hello express!');
//});



app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(req,res){
    res.send('about express!');
});
app.use(express.static(__dirname+'/public'));

app.listen(PORT,function(){
    console.log('express started '+PORT+"!")
});