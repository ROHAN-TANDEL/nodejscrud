// Express JS

const express = require("express");
const   app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('dotenv').config();
process.env.USER_ID // "239482"
process.env.USER_KEY // "foobar"
process.env.NODE_ENV // "development"

app.get('/', (req, res) => { res.send('running nodejs application ! '); console.log('server is read'); });

app.listen(process.env.SERVER_PORT || 3000, () => console.log('Server ready'));


