import Nurse from "../models/nurse"

const createNurse= async(nurseData) =>{
    const nurse= new Nurse(nurseData);
    return res.status(201).json({message: 'Nurse Created ', nurse});
}


const getNurse= async(email) =>{
    try{
        const nurse= await Nurse.findOne({email})
        if(!nurse){
            console.log('Nurse Missing');
            return null;
            
        }
        return nurse;

    } catch(error){
        console.log('Error Getting Nurse');
        return null;
        
    }
}


const getAllNurses= async()=> {
    try{
        const nurses= await Nurse.find();
        console.log('Nurses Found');
        return nurses;
        
    } catch(error){
        console.log('Error Getting Nurses');
        return [];
    }
}

const updateNurse= async( email, updateData) =>{
    try{
        const nurse= await Nurse.findOneAndUpdate({email}, updateData, {new: true});
        if(!nurse){
            console.log('Nurse Updated');
            return null;
            
        }
         return nurse;

    } catch(error){
        console.log('Error Updating Nurse');
        return null;
        
    }
}

const deleteNurse= async(email)=>{
    try{
        const nurse= await Nurse.findByIdAndDelete({email});
        if(!nurse){
            console.log('Nurse Not Found');
            return null;
            
        }
        return nurse;
    } catch(error){
        console.log('Error Deleting Nurse');
        return null;
        
    }
}

export default {
    createNurse,
    getNurse,
    getAllNurses,
    updateNurse,
    deleteNurse
};