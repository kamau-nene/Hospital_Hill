import  Doctor from '../models/doctor.model.js';

const createDoctorProfile= async(req, res) =>{
    try{
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(404).json({message: 'Enter all fields'});
        }
        const doctor= await Doctor.create({email, password})
        return res.status(201).json({message: 'Doctor Created', doctor})

    } catch(error){
        console.error('Error creating doctor profile:', error);
        
    }
}


const getDoctorProfile= async(req, res) => {
    try{
        const {email}= req.body;
        const doctor= await Doctor.findOneById({email})
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }
        return doctor;
    } catch(error){
        console.error('Error fetching doctor profile:', error);
        
    }
}

const getAllDoctorProfiles= async(req, res) =>{
    try{
        const doctors= await Doctor.find()
        return res.status(200).json({message: 'Doctors Found', doctors});

    }catch(error){
        console.error('Error fetching all doctor profiles:', error);
        return res.status(500).json({message: 'Internal Server Error'});
    } 
}


const updateDoctorProfile= async(req,res) =>{
    try{
        const {email, password}= req.body;
        const doctor = await Doctor.getByIdAndUpdate({email, password});
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }
        return res.status(200).json({message: 'Doctor Updated', doctor});

    } catch(error){
        console.error('Error updating doctor profile:', error);
        
    }
}

const deleteDoctorProfile= async(req,res)=>{
    try{
        const {email}= req.body;
        const doctor= await Doctor.getByIdAndDelete({email});
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'}); 

        }
        return res.status(201).json({message: 'Doctor Deleted', doctor});
} catch(error){
    console.error('Error deleting doctor profile:', error);
    
     }
}

export { createDoctorProfile,
    getDoctorProfile,
    getAllDoctorProfiles,
    updateDoctorProfile,
    deleteDoctorProfile
};