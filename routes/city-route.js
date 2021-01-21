const express = require('express');
const router = express.Router();
const { connection } = require('../modules/mysql-conn');
const numeral = require('numeral');

// 도시 리스트
router.get('/', (req, res) => {
	const sql = 'SELECT * FROM city ORDER BY name ASC';
	const onQuery = (err, r) => {
		for(let v of r) {
			v.population = numeral(v.population).format('0,0')+'명';
		}
		res.render('city/list', { file: 'city', data: r });
	}
	connection.query(sql, onQuery);
});

// 도시 등록
router.get('/create', (req, res) => {
	res.send('city/create');
});

module.exports = router;