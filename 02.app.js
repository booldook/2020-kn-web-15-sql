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



/********* 라우터 불러오기 **********/
const bookRouter = require('./routes/book-route');

/********* 라우터 구현 **********/
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/book', bookRouter);

/********* 에러처리 **********/
app.use((req, res, next) => {	// Not Found
	const error = {
		title: '404 Error',
		code: 404,
		msg: 'Page not found - 페이지를 찾을 수 없습니다.'
	}
	next(error);
});

app.use((err, req, res, next) => {	// Error
	res.render('error', err);
});