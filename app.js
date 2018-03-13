const http = require('http');

const express = require('express');

const env = process.env.NODE_ENV || 'development';

const path = require('path');

const fs = require('fs');

const app = express();

app.use('/', express.static(__dirname + './dist'));

app.get('*', function(req, res) {
	const html = fs.readFile('./index.html', 'utf-8');
	res.send(html);
});

const server = app.listen(8088, () => {
	console.log("Express started in ${app.get('env')} mode on http://localhsot:8088");
});