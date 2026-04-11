import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const mongodbOptions= {useUnifiedTopology: true};
const connectDB= async ()=>{
    try{
        const connectionResult= await mongoose.connect(process.env.MONGO.DEV.URI, mongodbOptions)
        console.log('Connected to db', connectionResult.connections[0]. name);
        
    }
    catch(error){
        console.error('Failed to connect', error);
        
    }
}


export default connectDB;