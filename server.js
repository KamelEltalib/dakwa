const express = require("express");
const app = express();
app.set('views', 'public')
app.use(express.static('public'))
app.get('/', (req, res) => {
      res.render('index.html');
})
app.listen(2003)
console.log("[Local on : http://localhost:2003]");
