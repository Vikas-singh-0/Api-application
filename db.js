const mongoose = require('mongoose')

const connectDb= async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connection in : ${conn.connection.host}`.blue.bold);
}

module.exports = connectDb;


