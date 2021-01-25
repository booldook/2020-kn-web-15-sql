const express = require('express');
const router = express.Router();
const pug = { file: 'book', title: '도서등록시스템' }

router.get('/create', (req, res) => {
	const pug = { ...pug };
	res.render('book/create', pug);
});

module.exports = router;