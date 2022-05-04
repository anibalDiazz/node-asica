var express = require('express');
var app = express();

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views')

app.use(express.static(__dirname + "/src"))

app.get('/', function(req, res) {
  res.render('index',{titulo: "Si funciona!"});
});

app.listen(port, function() {
  console.log(`Aplicación ejemplo, escuchando el puerto ${port}!`);
});