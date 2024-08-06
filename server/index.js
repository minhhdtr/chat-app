import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import connectDB from './config/connectDB.js';
import router from './routes/index.js';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionsSuccessStatus: 200
}));
app.options('*', cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: `Server running on port ${PORT}` });
});

app.use('/api', router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});