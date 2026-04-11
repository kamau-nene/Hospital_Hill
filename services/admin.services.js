import ADMIN from '../models/admin.js';

const createAdmin= async(adminData)=>{
    const admin= new ADMIN(adminData);
    return admin.save();
}

const getAdmin= async({email})=>{
    try{
        const admin= await ADMIN.findOne({email});
        if(!admin){
            console.log('Admin missing');
            return null;
            
        }
        return admin;
    } catch(error){
        console.log('Internal error');
        return null;
        
    }

}

const getAllAdmins= async()=>{
    try{
        const admins= await ADMIN.find()
        return admins;

    } catch(error){
        console.log('Internal server error');
        return [];
        
    }
}


const updateAdmin= async(email, updateData)=>{
    try{
        const admin= await ADMIN.findByIdAndUpdate({email}, updateData, {new: true});
        if(!admin){
            console.log('Admin missing');
            return null;
            
        }
        return admin;

    } catch(error){
        console.log('Internal server error');
        return null;
        
    }
}



const deleteAdmin= async(email)=>{
    try{
        const admin= await ADMIN.findByIdAndDelete({email})
        if(!admin){
            console.log('Admin missing');
            return null;
            
        }
        return admin;

    } catch(error){
        console.log('Internal error');
        return null;
        
    }
}


export {createAdmin,
    getAdmin,
    getAllAdmins,
    deleteAdmin,
    updateAdmin
}