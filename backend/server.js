import { connect } from "http2";
import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
dotenv.config();



//Create a server
app.listen(process.env.PORT, () =>{
    console.log(`Server is connected with http://localhost:${process.env.PORT}`)
    connectDB();
})