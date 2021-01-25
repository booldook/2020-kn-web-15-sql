const mysql = require('mysql2/promise');
const pool = mysql.createPool({
	host: 'localhost',
	user: 'booldook',
	password: '000000',
	database: 'booldook',
	waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = { mysql, pool };