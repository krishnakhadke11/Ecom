import mongoose from 'mongoose';
import 'dotenv/config'

const Connection = async () => {

    const URL = process.env.DB_URL
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;