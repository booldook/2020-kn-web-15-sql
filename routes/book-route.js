const express = require('express');
const router = express.Router();
const pug = { file: 'book', title: '도서등록시스템' }

router.get('/write', (req, res) => {
	const pug = { ...pug };
	res.render('book/write', pug);
});

module.exports = router;