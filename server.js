const express = require('express')
const dotenv = require('dotenv')
const color = require('colors')
const connectDb = require('./db')

// addd middleware 
// const login = require('./Middleware/logger')
const morgan = require('morgan')

//load env variables

dotenv.config({path:'./config/config.env'})

// add mongoose connect function

connectDb();

//add router files 

const bootcamp= require('./Routes/bootcamps')

const app = express();

// Add body parser
app.use(express.json())

// middleware login
// app.use(login)
// console.log(process);
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// mount router

app.use('/api/v1/bootcamps',bootcamp)

const PORT = process.env.PORT || 3000



const server = app.listen(PORT,()=>{
    console.log(`The server is running on the port ${PORT} and in ${process.env.NODE_ENV}`);
})

process.on('unhandledRejection',(err,promise)=>{
    console.log(err.message);
})