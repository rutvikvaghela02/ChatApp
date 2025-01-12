import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './route/auth.router.js';
import messageRoutes from './route/message.router.js'
import userRoutes from './route/users.router.js'

import connectToDB from './db/connectToDb.js';
import { app, server } from './socket/socket.js';

//dotenc cofiguration
dotenv.config();

//corss orgin access
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, 
    })
);

//json accepatance
app.use(express.json());

//cokkie accepatance
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

//api
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


//server
server.listen(PORT, ()=>{
    connectToDB();
    console.log(`server is running on ${PORT}`)
});
