import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/kontakt', (req, res) => {
  res.send('Strona Kontaktowa!');
});

export default router;