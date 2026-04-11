import admin from "../models/admin";
import handleValidationError from '../middlewares/errorHandler';

const adminSignup= async(req, res)=>{
    try{
       const {email, password}= req.body;
       if(!email || !password){
        handleValidationError('Fill in all spaces');
       }
       if(password. lenght< 9){
        return res.status(400).json({message: 'password is less'});
       }
       const existingAdmin= await admin.findOne({email})
       if(existingAdmin){
        return res.status(400).json({message: 'Admin already exists'});
       }
       const admin= await admin.create(email, password)
       res.status(201).json({message: 'Admin created successfuly'});

    } catch(error){
        res.status(500).json({error: Error.message});
    }
}

const getAdminProfile= async(req, res)=>{
    try{
        const{email}=req.body;
        const admin= await getAdmin({email});
        return res.status(200).json({message: 'Admin found'});

    } catch(error){
        return res.status(500).json({error: Error.message});
    }
}

const getAllAdminProfile= async(req, res)=>{
    try{
        const admin= await getAllAdmin({email})
        return res.status(200).json({message: 'Admins found'});

    } catch(error){
        res.status(500).json({error: Error.message});
    }
}


const updateAdminProfile= async(req, res)=>{
    try{
        const {email, password}= req.body;
        const admin= await updateAdmin(email, password)
        return res.status(200).json({message: 'Admin Updated'});
        
    } catch(error){
        res.status(500).json({error: Error.message});
    }
}



const deleteAdminProfile= async(req, res)=>{
    try{
        const {email}= req.body
        const admin= await deleteAdmin({email});

    } catch(error){
        res.status(500).json({error: Error.message});
    }
}



export default{adminSignup,
    getAdminProfile,
    getAllAdminProfile,
    updateAdminProfile,
    deleteAdminProfile
}