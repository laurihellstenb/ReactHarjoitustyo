const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('tuotteet.db');

app.listen(8080, function () {
    console.log('Node toimii localhost:8080');
});

app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Toimii' })
});

app.get('/tuote/all', function (req, res) {
  db.all("SELECT * FROM tuote", function (error, result) {
    if (error) throw error;

    return res.status(200).send(result);
  })
})

app.get('/tuote/one/:id', function (req, res) {
  let id =req.params.id;
  db.get("SELECT * FROM tuote where id=?", [id], function (error, result) {
    if (error) throw error;

    if (typeof(result) == "undefined") {
      return res.status(200).send({});
    }

    return res.status(200).send(result);
  })
})

app.post('/tuote/add', function (req, res) {
  let tuote = req.body;

  db.run("INSERT INTO tuote (nimi, hinta, kuva, kuvaus) VALUES (?,?,?,?)",
[tuote.nimi, tuote.hinta, tuote.kuva, tuote.kuvaus], function (error, result) {
  if (error) throw error;

  return res.status(200).send({error: false, message: "Lisätty"});
})
})

app.get('/tuote/delete/:id', function (req, res) {
  let id = req.params.id;

  db.run("DELETE FROM tuote WHERE id=?", [id], function (error, result) {
    if (error) throw error;

    if (this.changes == 0) {
      return res.status(200).send({error: false, message: "Ei poistettavaa",
    count: 0});
    }

    return res.status(200).send({error: false, message: "Poistettu", count:
    this.changes});
  })

})

app.get('*', function (req, res) {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
})
