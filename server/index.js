const api = require('./api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const resolve = file=>path.resolve(__dirname, file);
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('*', function(req, res) {
	console.log(path.resolve(__dirname, '../dist/index.html'));
	const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
	res.send(html)
})
app.listen(8088);
console.log('success listen…………');

