require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL , {
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${connection.connection.host}`);
        
    } catch (error) {
        console.log(error)
    }

}


module.exports =  connectDb ;







