const express = require('express');
const router = express.Router();

// 도시 리스트
router.get('/', (req, res) => {
	const pug = {
		file: 'city',
	}
	res.render('city/list', pug);
});

// 도시 등록
router.get('/create', (req, res) => {
	res.send('city/create');
});

module.exports = router;