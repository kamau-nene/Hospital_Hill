import Patient from '../models/patient';
import {createPatient, getPatient, getAllPatients, updatePatient, deletePatient} from '../services/patient.services';

const createPatientProfile= async(req, res) =>{
    try{
        const {email, password}= req.body;
        if(!email || !password){
            return res.status(404).json({message: 'Enter All Fields'});
        }
        const patient= await Patient.create({email, password});
        return res.status(201).json({message: 'Patient Created'});
    } catch(error){
        console.error('Error Creating Patient');
        
    }
}


const getPatientProfile= async(req, res) =>{
    try{
        const {email}= req.params;
        const patient= await Patient.getByEmail({email});
        if(!patient){
            return res.status(404).json({message: 'Patient Missing'});

        }
        return res.status(200).json({message: 'Patient Found'});

    } catch(error){
        console.error('Error Finding Patient');
        
    }
}


const getAllPatientProfiles= async(req, res)=>{
    try{
        const patients= await Patient.find();
        return res.status(200).json({message: 'Patient Found'});

    } catch(error){
        console.error('Error Getting Patients');
        
    }
}



const updatePatientProfile= async(req, res)=>{
    try{
        const {email}= req.body;
        const patient= await Patient.getByEmailAndUpdate({email});
        if(!patient){
            return res.status(404).json({message: 'Patient Missing'});

        }
        return res.status(200).json({message: 'Patient Updated'});

    } catch(error){
        console.error('Error Updating Patient');
        
    }
}


const deletePatientProfile= async(req, res)=>{
    try{
        const {email}=req.params;
        const patient= await Patient.getByEmailAndDelete({email});
        if(!patient){
            return res.status(404).json({message: 'Patient Not Found'});

        }
        return res.status(204).json({message: 'Patient Deleted'});

    } catch(error){
        console.error('Error Deleting Patient');
        
    }
}


export {createPatientProfile,
    getPatientProfile,
    getAllPatientProfiles,
    updatePatientProfile,
    deletePatientProfile
}