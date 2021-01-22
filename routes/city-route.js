const express = require('express');
const router = express.Router();
const { mysql, connection } = require('../modules/mysql-conn');
const numeral = require('numeral');

// 도시 리스트
router.get('/', async (req, res) => {
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
	res.render('city/create', { file: 'city' });
});

// 도시 등록(저장)
router.post('/save', (req, res) => {
	const { name, lat, lon, population, summary } = req.body;
	const sql = "INSERT INTO city SET name=?,lat=?,lon=?,population=?,summary=?";
	const value = [name, lat, lon, population, summary];
	const onQuery = (err, r) => {
		res.redirect('/city');
	}
	connection.query(sql, value, onQuery);
});

// 도시 삭제
router.get('/remove/:id', (req, res) => {
	const sql = 'DELETE FROM city WHERE id='+req.params.id;
	const onQuery = (err, r) => {
		res.redirect('/city');
	}
	connection.query(sql, onQuery);
});

// 도시 수정
router.get('/update/:id', (req, res) => {
	const sql = 'SELECT * FROM city WHERE id='+req.params.id;
	const onQuery = (err, r) => {
		res.render('city/update', { file: 'city', r: r[0] });
	}
	connection.query(sql, onQuery);
});

router.post('/update', (req, res) => {
	const { name, lat, lon, population, summary, id } = req.body;
	const sql = 'UPDATE city SET name=?,lat=?,lon=?,population=?,summary=? WHERE id=?';
	const value = [name, lat, lon, population, summary, id];
	const onQuery = (err, r) => {
		res.redirect('/city');
	}
	connection.query(sql, value, onQuery);
})

module.exports = router;