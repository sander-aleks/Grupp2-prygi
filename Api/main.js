const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'd110073.mysql.zonevs.eu',
  user: 'd110073_useruser',
  password: 'Suurjumal123',
  database: 'd110073_purgisort'
});

connection.connect();

app.get('/kastid', (req, res) => {
  // Sample query to fetch data from the database
  const query = 'SELECT * FROM Prügikastid';
  
  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Error fetching data from the database');
      return;
    }

    res.json(results); // Send the data as JSON
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
