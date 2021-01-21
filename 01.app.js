const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');
const { mysql, connection } = require('./modules/mysql-conn');

app.listen(3000, () => { console.log('http://127.0.0.1:3000'); });
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use('/', express.static(path.join(__dirname, 'public')));

// 도시 리스트
app.get('/city', (req, res) => {
	const pug = {
		file: 'city',
	}
	res.render('city/list', pug);
});

// 도시 등록
app.get('/city/create', (req, res) => {
	res.send('/city/create');
});

app.use((req, res) => {
	res.send('/404');
});