import express from 'express';
import cors from 'cors';
import { config } from 'dotenv'
import connectDb from './database';
import modules from './modules';

config();

const app = express();
connectDb();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

modules(app);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Poll Maker is online' });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Poll Maker is live on Port ${port}`)
});
