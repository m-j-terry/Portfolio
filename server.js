const express = require('express');
const app = express()
const PORT = 5173;

app.use(express.static('dist'));

app.listen(PORT, () => {
	console.log(`Watch out, portfolio is gunnin' on ${PORT}!`);
});