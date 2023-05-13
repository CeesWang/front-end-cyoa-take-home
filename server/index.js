const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const expressWebsocket = require('express-ws');
const DataAccessObject = require('./dataAccessObject');
const Comment = require('./comment');

const app = express();
const websocket = expressWebsocket(app);
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

const dataAccessObject = new DataAccessObject('./database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch(error => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.ws('/websocket', function(ws, req) {
  console.log('WebSocket connection established');
});

app.post('/createComment', function(request, response) {
  const { body } = request;
  comment.createComment(body).then(result => {
    const clients  = websocket.getWss().clients;
    websocket.getWss().clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(result));
      }
    });
    response.send(result);
  });
});

app.get('/getComment', function(request, response) {
  const { body } = request;
  const { id } = body;
  comment.getComment(id).then(result => {
    response.send(result);
  });
});

app.get('/getComments', function(request, response) {
  comment.getComments().then(result => {
    response.send(result);
  });
});

app.delete('/deleteComments', function(request, response) {
  comment.deleteComments().then(result => {
    response.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  const rootDir = __dirname.replace('/server', '');
  response.sendFile(`${rootDir}/src/index.html`);
});
