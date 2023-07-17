import User from '../model/userSchema.js';
import bcrypt from 'bcryptjs'
export const userLogIn = async (req, res) => {
    try {
        const {username,password} = req.body;
        let user = await User.findOne({ username: username});
        if(!user){
            return res.status(400).json({error:"Please enter correct username"})
        }

        let passCompare = await bcrypt.compare(password,user.password);
        if(!passCompare){
            return res.status(400).json({error:"Please enter correct password"})
        }
        return res.status(200).json(`${username} login successfull`);
    } catch (error) {
        res.json('Error: ', error.message);        
    }
}

export const userSignUp = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if(user) {
            return res.status(401).json({ message: 'User already exist'});
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        

         user = await User.create({
            fullname: req.body.fullname,
            // lastname: req.body.lastname,
            username:req.body.username,
            email:req.body.email,
            password: secPass,
            phone: req.body.phone
        })
        
        const resData = {
            fullname: req.body.fullname,
            // lastname: req.body.lastname,
            username:req.body.username,
            email:req.body.email,
            // password: secPass,
            phone: req.body.phone
        }
        res.status(200).json( resData );
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}