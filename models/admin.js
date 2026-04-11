import mongoose from 'mongoose';
const {Schema, model}= mongoose;
const adminSchema= new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: Number, required: true}

})

const Admin= model('admins', adminSchema);
export default Admin;