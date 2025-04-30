import { app } from "./app.js";
import dotenv from 'dotenv';
dotenv.config();



//Create a server
app.listen(process.env.PORT, () =>{
    console.log(`Server is connected with http://localhost:${process.env.PORT}`)
})