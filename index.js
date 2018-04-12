const express = require('express');
const fortunes = require('./lib/fortune');

const app = express();
app.use(express.static(`${__dirname}/public`));
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about', { fortune: fortunes.getFortunes() });
});
app.set('port', process.env.PORT || 3000);
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'), () => {
  console.log(`Express runing on ${app.get('port')}port; Press Ctrl+C for exit`);
});
