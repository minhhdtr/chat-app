import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  // res.send('Hello World');
  res.json({ message: 'Hello World' });
});