import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './config/db.js';
import { authRoute } from './routes/auth.routes.js';
import cors from 'cors'
dotenv.config();

const app = express();

connectToDB();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
));
app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

