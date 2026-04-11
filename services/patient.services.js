import Patient from "../models/patient";

const createPatient= async(patientData) =>{
    const patient = new Patient(patientData)
    return patient.save();
}


const getPatient= async(email)=>{
    try{
        const patient= await Patient.findOne({email})
        if(!patient){
            console.log('Patient Missing');
            return null;
            
        }
        return patient ;

    } catch(error){
        console.error('Error getting Patient');
        return null;
        
    }
}

const getAllPatients= async()=>{
    try{
        const patients= await Patient.find()
        console.log('Patients');
        

    } catch(error){
        console.error('Error Getting Patients');
        return []
        
    }
}


const updatePatient= async(email, updateData) =>{
    try{
        const patient= await Patient.findOneAndUpdate({email}, updateData, {new: true});
        if(!patient){
            console.log('Patient Missing');
            return null;

        } 
        return patient;

    } catch(error){
        console.error('Error Updating patient');
        return null;

    }
}

const deletePatient= async(email)=>{
    try{
        const patient= await Patient.findOneAndDelete({email});
        if(!patient){
            console.log('Patient Not Found');
            return null;

        }
        return patient;

    } catch(error){
        console.error('Error Deleting Patient ');
        return null;
        
    }
}


export{createPatient,
    getPatient,
    getAllPatients,
    updatePatient,
    deletePatient
}