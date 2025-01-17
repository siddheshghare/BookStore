import express from "express"
import mongoose from "mongoose"
const app = express()
import cors from "cors"

import dotenv from"dotenv"
dotenv.config();

app.use(cors())

const port = process.env.PORT || 4000
const mongoUrl=process.env.MONGOURI
const dbName=process.env.DB_NAME

try {

    const connected= await mongoose.connect(`${mongoUrl}/${dbName}`)
    console.log("db connected");
    
    

} catch (error) {
    console.log("error",error);
    
}


import bookRoute from "./route/book.route.js"
app.use("/book",bookRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})