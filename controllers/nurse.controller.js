import Nurse from '../models/nurse.model.js';
const createNurseProfile= async(req, res)=>{
    const {name, email, phone, department}= req.body;
    if(!name || !email || !phone || !department){
        return res.status(400).json({message: 'All fields are required'});
    }
    try {
        const nurse= await Nurse.create({name, email, phone, department});
        return res.status(201).json({message: 'Nurse profile created successfully', nurse});
    } catch (error) {
        return res.status(500).json({message: 'Error creating nurse profile', error: error.message});
    }       


}


const getNurseProfile= async(req, res)=>{
    try{
        const {email}=req.body;
        const nurse= await Nurse.findOne({email});
        if(!nurse){
            return res.status(404).json({message: 'Nurse profile not found'});
        }
        return res.status(200).json({message: 'Nurse profile retrieved successfully', nurse});

    } catch (error) {
        return res.status(500).json({message: 'Error retrieving nurse profile', error: error.message});
    }   
}


 const getAllNurseProfiles= async(req, res)=>{