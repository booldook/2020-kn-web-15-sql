const express = require('express');
const router = express.Router();
const { pool } = require('../modules/mysql-pool'); 
const pugs = { file: 'book', title: '도서등록시스템' }

router.get('/', (req, res, next) => {
	res.send('리스트');
});

router.get('/create', (req, res, next) => {
	const pug = { ...pugs };
	res.render('book/create', pug);
});

router.post('/save', async (req, res, next) => {
	try {
		const sql = 'INSERT INTO book SET title=?, writer=?, wdate=?';
		const value = [req.body.title, req.body.writer];
		const r = await pool.query(sql, value);
		res.redirect('/book');
	}
	catch(e) {
		const error = {
			title: 'SQL Error',
			code: 500,
			msg: e.message
		}
		next(error);
	}
});

module.exports = router;