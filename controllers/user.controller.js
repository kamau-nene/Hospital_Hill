import User from '../models/user.js';

const signIn= async(req, res) => {
    try{
        const {email, password}= req.body;
        if(!email || !password){
            handleValidationError('Fill in all the blanks');
        }
        if(userData.password.length< 9){
            return res.status(400).json({message: 'Password is less'});
        }
        if(userExists){
            return res.status(400).json({message: 'User Already Exits'});
        }
        const user= await user.create({email, password})
        return res.status(201).json({message: 'Use Created', user})

    } catch(error){
        console.error('Error signing in user');
        return res.status(500).json({error: error.message});
        
    }
}

const signUp= async(req, res)=>{
    try{
        const {email, password}= req.body;
        const existingUser= await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message: 'User Already Exists'});
        }
         if(!email || !password){
            return res.status(404).json({message: 'Fill in the blanks'});

        }
        if(password.length < 9){
            return res.status(400).json({message: 'Pasword is less'});
        }
             if(!email || !password){
            return res.status(404).json({message: 'Fill in the blanks'});

        }
        if(password.length < 9){
            return res.status(400).json({message: 'Pasword is less'});
        }
        
    }
}