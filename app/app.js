import express from 'express';
import path from 'path';
import router from './routes.js';
const app = express();

const __dirname = path.resolve();
console.log(__dirname);

// ustawienie silnika widoków
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// wskazanie na folder publiczny
app.use(express.static('public'));

app.use('/', router)

export default app;