import app from './app.js'
import { PORT } from './config.js';

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
