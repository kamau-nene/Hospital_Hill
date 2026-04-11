import mongoose from 'mongoose';
const {Schema, model}= mongoose;
const nurseSchema= new Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: Number, required: true}
})

const Nurse= model('nurses', nurseSchema);
export default  Nurse;