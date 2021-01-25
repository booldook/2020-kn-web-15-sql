/********* 전역선언 **********/
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const { err } = require('./modules/util');

/********* 서버실행 **********/
app.listen(process.env.PORT, () => { 
	console.log(`http://127.0.0.1:${process.env.PORT}`); 
});

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
app.use((req, res, next) => {	// 404 Error
	next(err(404));
});

app.use((err, req, res, next) => {	// Error <- next(error)
	res.render('error', err);
});