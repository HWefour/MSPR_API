const {signIn} = require("../Models/Auth");


exports.signIn = async (req , res)=> {
    try {
        const {email , password , firstName , lastName , usersName} = req.body
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password , salt)
        const data = {email , firstName , lastName , usersName , password : hashedPassword}
        const signin = await signIn(data);
        res.status(200).json(signin);
    }catch(err){
        res.status(400).json({message : err.message})
    }
};