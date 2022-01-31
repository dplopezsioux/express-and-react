import express from 'express';
import config from './config';
import serverRender from './serverRender.js';

const app = express();

app.use(express.static('dist'));

app.set('view engine', 'ejs');

app.get('*', async (req, res) => {
  const initialContent = serverRender(req);
  res.render('index', { initialContent: "pepe" });
});

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
