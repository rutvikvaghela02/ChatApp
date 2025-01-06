import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './route/auth.router.js';
import messageRoutes from './route/message.router.js'
import userRoutes from './route/users.router.js'

import connectToDB from './db/connectToDb.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);



app.listen(PORT, ()=>{
    connectToDB();
    console.log(`server is running on ${PORT}`)
});
