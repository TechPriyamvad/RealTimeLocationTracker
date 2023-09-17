const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const MongoConnect = require('./db/mongo');
const apiRouter = require('./routes/api');

// connecting to mongodb server
const mongoConnect = new MongoConnect();
mongoConnect.connection();

// connecting to web socket
const initializeWebSocket = require('./utils/web-socket');
initializeWebSocket(server);

// parsing incoming http request body
app.use(bodyParser.json());

app.use('/api', apiRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
