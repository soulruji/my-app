import express from 'express';

const app = express();

let port = 3000;


app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', (req, res) => ) {
	return res.send('Can you hear me?')
}


const server = app.listen( port, () => {
	console.log('Express listening on port', port);
});