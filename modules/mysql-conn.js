const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'booldook',
	password: '000000',
	database: 'booldook'
});
module.exports = { mysql, connection};