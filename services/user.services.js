
const createUser= async()=>{
    const user= newUser(userData)
    return user.save();
}


const getUser= async(res, req)=>{
    try{
        const {email}= req.body
        const user= await findByEmail({email})
        if(!user){
            console.log('user not found');
            return null;
            
        }
        return user;
    } catch(error){
        console.log('internal server error');
        
    }
}


const getAllUser= async(res, req)=>{
    try{
        const {email}= req.params
        const user= await findByEmail({email})
        if(!user){
            console.log('user not found');
            return null;
            
        } 
        return user;
    } catch(error){
        console.log('Internal server error');
        
    }
}


const updateuser= async(res, req)=>{
    try{
        const {email, password}= req.body
        const user= await findByEmailAndUpdate(email, password)
        if(!user){
            console.log('User not found');
            return null;
            
        }
        return user;
        
    }catch(error){
        console.log('internal server error');
        
    }
}

const deleteUser= async(res, req)=>{
    try{
        const {email}= req.body
        const user= await findByEmailAndDelete({email})
        if(!user){
            console.log('User not found');
            return null;
            
        } 
        return user;
    } catch(error){
        console.log('intrenal server error');
        
    }
}


export default{createUser, getUser, getAllUser, updateUser, deleteUser}