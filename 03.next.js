/********* 전역선언 **********/
const express = require('express');
const app = express();
const path = require('path');

/********* 서버실행 **********/
app.listen(3000, () => { console.log('http://127.0.0.1:3000'); });

/********* PUG설정 **********/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

/********* POST처리 req.body **********/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
	req.user = 'booldook';
	next();
});

app.get('/', (req, res, next) => {
	// res.send(req.user);
	next('에러내용');
});

app.get('/test', (req, res, next) => {
	res.send(req.user + '/TEST');
});

app.use((req, res, next) => {
	res.send('404 Not found');
});

app.use((err, req, res, next) => {
	res.send(err);
});