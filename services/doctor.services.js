import Doctor from '../models/doctor.model.js';

const createDoctor= async(doctorData) =>{
    const doctor= new Doctor(doctorData)
    return await doctorData.save()
}

const getDoctor= async(email)=>{
    try{
        const doctor= await Doctor.findOne({email})
        if(!doctor){
            console.log('Doctor not found');
            return null;
            
        }
        return doctor;
    } catch(error){
        console.error('Error fetching doctor:', error);
        return null
        
    }
}

const getAllDoctors= async(doctorData) =>{
    try{
        const doctors= await Doctor.find();
        return doctors;
    } catch(error){
        console.error('Error fetching all doctors:', error);
        return [];
        
    }
}


const updateDoctor= async(email, updateData)=>{
    try{
        const doctor= await Doctor.findOneAndUpdate({email}, updateData, {new :true});
        if(!doctor){
            console.log('Doctor not found for update');
            return null;
            
        }
        return doctor;
    } catch(error){
        console.error('Error updating doctor:', error);
        
    }
}

const deleteDoctor= async(email) =>{
    try{
        const doctor= await Doctor.findOneAndDelete({email})
        if(!doctor){
            console.log('Doctor not found for deletion');
            return null;
            
        }
        return doctor;

    } catch(error){
        console.error('Error deleting doctor:', error);
        return null;
        
    }
}

export {createDoctor, getDoctor, getAllDoctors, updateDoctor, deleteDoctor};