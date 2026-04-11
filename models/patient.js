import mongoose  from "mongoose";
const {Schema, model}= mongoose;
const patientSchema= new Schema({
    name: {type: String, required: true},
    patientNo: {type: String, required: true},
    wardNo: {type: String, required: true},
    doctorAssigned: {type: String, required: true, unique:  true}
})


const PATIENT= model('urls', patientSchema);
export default PATIENT;

