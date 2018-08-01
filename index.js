
const express = require('express')
require('express-async-errors');

const app = express();
require("express-ws")(app);

app.get('/api/test', async (req, res, next) => {
  throw 1;
})

app.ws('/api/test-ws', async (ws, req, next) => {
  throw 1;
})

const port = 9988
app.listen(port, () => console.log(`Listening on port ${port}`))
