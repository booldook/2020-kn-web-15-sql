const express = require('express');
const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000'); });

app.use((req, res, next) => {
	console.log('middleware 1');
	req.user = 'booldook';
	next();
});

app.get('/', (req, res, next) => {
	console.log(req.user);
	res.send('<h1>ROOT</h1>');
});