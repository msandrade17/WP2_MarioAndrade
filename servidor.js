const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname +'/views/partials');


app.set('view engine', 'hbs');


app.get('/', (req, res)=>{
    res.render('index');

 });


app.listen(port,()=>{
   console.log('conectando... ');
 })
// app.listen(3000,()=>{
//  });

hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
hbs.registerPartial('partial_name', 'partial value');
require('./hbs/helper');