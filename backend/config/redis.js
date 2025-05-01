import Redis from "ioredis";
import chalk from "chalk";
import { configDotenv } from "dotenv";
configDotenv();

const redisClient = () =>{
    if(process.env.REDIS_URL){
console.log("Redis connected".bgCyan.white);
return process.env.REDIS_URL;
    }
    else{
        console.log("Redis not connected".bgRed.white);
        return null;
    }
}

export const redis = new Redis(redisClient());