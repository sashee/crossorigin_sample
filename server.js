const express = require('express')

{
	const corsApp = express();

	corsApp.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	});

	corsApp.get('/script.js', (req, res) => res.sendFile(`${__dirname}/script.js`));

	corsApp.listen(3001);
}

{
	const noCorsApp = express();

	noCorsApp.get('/script.js', (req, res) => res.sendFile(`${__dirname}/script.js`));

	noCorsApp.listen(3002);
}

{
	const app = express()

	app.get('/index.html', (req, res) => res.sendFile(`${__dirname}/index.html`));

	app.listen(3000);
}