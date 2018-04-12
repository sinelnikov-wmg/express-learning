const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/public`));
const handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

const fortunes = [
  'test',
  'test1',
  'test2',
];
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune: randomFortune });
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
