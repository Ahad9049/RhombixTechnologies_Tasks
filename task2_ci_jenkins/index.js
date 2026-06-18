const express = require('express');
const { add, multiply } = require('./math');
 
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  res.json({ message: 'Rhombix Technologies - Jenkins CI Demo App is running!' });
});
 
app.get('/calc', (req, res) => {
  const a = Number(req.query.a) || 0;
  const b = Number(req.query.b) || 0;
  res.json({ add: add(a, b), multiply: multiply(a, b) });
});
 
if (require.main === module) {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
}
 
module.exports = app;