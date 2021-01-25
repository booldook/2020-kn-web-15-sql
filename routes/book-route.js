const express = require('express');
const router = express.Router();
const { pool } = require('../modules/mysql-pool');
const { err } = require('../modules/util'); 
const moment = require('moment'); 
const pugs = { file: 'book', title: '도서등록시스템' }

router.get('/', async (req, res, next) => {
	try {
		const sql = 'SELECT * FROM books ORDER BY id DESC';
		const r = await pool.query(sql);
		for(let v of r[0]) v.wdate = moment(v.wdate).format('YYYY-MM-DD');
		const pug = { ...pugs, r: r[0] };
		res.render('book/list', pug);
	}
	catch(e) {
		next(err(e.message));
	}
});

router.get('/create', (req, res, next) => {
	const pug = { ...pugs };
	res.render('book/create', pug);
});

router.post('/save', async (req, res, next) => {
	try {
		const sql = 'INSERT INTO books SET title=?, writer=?, wdate=?';
		const value = [req.body.title, req.body.writer, new Date()];
		const r = await pool.query(sql, value);
		res.redirect('/book');
	}
	catch(e) {
		next(err(e.message));
	}
});

module.exports = router;