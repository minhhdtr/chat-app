import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/connectDB.js';
import router from './routes/index.js';

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  // res.send('Hello World');
  res.json({ message: 'Hello World' });
});

app.use('/api', router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});