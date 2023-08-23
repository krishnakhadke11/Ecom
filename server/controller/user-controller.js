import User from '../model/userSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET;
export const userLogIn = async (req, res) => {
    try {
        const {username,password} = req.body;
        let user = await User.findOne({ username: username});
        if(!user){
            return res.status(401).json({error:"Please enter correct Credential"})
        }

        let passCompare = await bcrypt.compare(password,user.password);
        if(!passCompare){
            return res.status(401).json({error:"Please enter correct Credential"})
        }
        const data = {
            user:{
                id:user.id
            }
        }
        
        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({authtoken});
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json('Error: ', error.message);        
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
            username:req.body.username,
            email:req.body.email,
            password: secPass,
            phone: req.body.phone
        })
        
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET,{expiresIn:"15m"});
       
        res.status(200).json( {authtoken} );
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}