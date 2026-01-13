// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import conectdb from "./db/index.js";


conectdb();

