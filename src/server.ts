import express from "express";
import dotenv from 'dotenv';
import router from "./routes/api";
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

server.listen(4000, () => console.log("Server is Running"));