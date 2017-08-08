'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('ok'));

app.listen(process.env.PORT || 8080, () => console.log(
	`Your app is listening on port ${process.env.PORT || 8080}`)
);
