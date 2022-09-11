import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.static('public'))


app.listen(process.env.PORT,()=>{
    console.log("Server started on localhost:" + process.env.PORT)
})