const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const docRef = db.collection('todos').doc('AOOMAFYERqrMNyHvKYoA');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/todos', (req, res) => {
  docRef
    .get()
    .then(doc => {
      if (doc.exists) {
        res.setHeader('Content-Type', 'application/json');
        res.send(doc.data());
      } else {
        res.status(500);
        res.send('Something went wrong');
      }
    })
    .catch(() => {
      res.status(500);
      res.send('Something went wrong');
    });
});

app.put('/todos', (req, res) => {
  const id = `${Date.now()}`;

  docRef
    .set(
      {
        [id]: req.body.todoText
      },
      {merge: true}
    )
    .then(() => {
      res.status(200);
      res.send('OK');
    })
    .catch(error => {
      res.status(500);
      res.send('Something went wrong');
    });
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
