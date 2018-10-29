const express = require('express')

const handleScript = (req, res) => {
	res.send(`document.write("loaded, got cookies: ${req.headers.cookie}");`);
};

{
	const corsApp = express();

	corsApp.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	});

	corsApp.get('/script.js', handleScript);

	corsApp.listen(3001);
}

{
	const noCorsApp = express();

	noCorsApp.get('/script.js', handleScript);

	noCorsApp.listen(3002);
}

{
	const app = express()

	app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

	app.listen(3000);
}
