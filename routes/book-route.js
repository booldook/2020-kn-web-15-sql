const express = require('express');
const router = express.Router();
const { connection } = require('../modules/mysql-conn'); 
const pugs = { file: 'book', title: '도서등록시스템' }

router.get('/create', (req, res) => {
	const pug = { ...pugs };
	res.render('book/create', pug);
});

router.post('/save', (req, res) => {
	const sql = 'INSERT INTO books SET title=?, writer=?, wdate=?';
	const value = [req.body.title, req.body.writer, new Date()];
	const onQuery = (err, r) => {
		if(err) res.json(err);
		else res.json(r);
	}
	connection.query(sql, value, onQuery);
});

module.exports = router;