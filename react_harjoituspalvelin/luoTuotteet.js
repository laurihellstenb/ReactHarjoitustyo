var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tuotteet.db');

db.serialize(function() {

	let sql = "CREATE TABLE tuote (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "nimi text, " +
			  "hinta real, " +
			  "kuva blob, " +
			  "kuvaus text )";

	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	});

	sql = "INSERT INTO `tuote` (`id`, `nimi`, `hinta`, `kuva`, `kuvaus`) "+
	" VALUES (1, 'Rantapallo', 9.99, null, 'Hieno rantapallo kesäkeleille')";
	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `tuote` (`id`, `nimi`, `hinta`, `kuva`, `kuvaus`) "+
	" VALUES (2, 'Tennismaila', 13.99, null, 'Käytetty aikuisten tennismaila')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	db.each("SELECT id, nimi FROM tuote", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.nimi);
	});

	db.close();
});
