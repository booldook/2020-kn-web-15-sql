const express = require('express');
const router = express.Router();
const pugs = { file: 'book', title: '도서등록시스템' }

router.get('/create', (req, res) => {
	const pug = { ...pugs };
	res.render('book/create', pug);
});

module.exports = router;