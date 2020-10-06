import 'dotenv/config';
import express from 'express';

import UserController from './app/controllers/UserController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.json({name: 'Jonathan'})
})

app.post('/users', UserController);

app.listen(process.env.PORT, () => {
	console.log(`Server running on the ${process.env.PORT}`)
})