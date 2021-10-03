// Express JS

const express = require("express");
const   app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => { res.send('running nodejs application ! '); console.log('server is read'); });

app.listen(3000, () => console.log('Server ready'));