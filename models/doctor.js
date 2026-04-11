import mongoose from 'mongoose';
const {Schema, model}= mongoose;
const doctorSchema= new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    shiftTime: {type: Date, required: true},
    present: {type: Boolean, required: true},

})

const Doctor= model('doctors', doctorSchema);
export default Doctor;