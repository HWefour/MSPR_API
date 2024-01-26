const {
  getAllUsers,
  getAllAdvertisements,
  getAllAdvertisementWithInfo,
  getInfoUser,
  createUser,
  deleteUser,
  editUser,
  getAdvertisementForUser,
} = require("../Models/Backoffice");


exports.getAllUsers = async (req , res) => {
    try{
        const admin = await getAllUsers();
        res.status(200).json(admin);
    }
    catch(err){
        res.status(400).json-({message : err.message});
    }
};

exports.getAllAdvertisements = async (req , res) => {
    try {
        const admin = await getAllAdvertisements();
        res.status(200).json(admin);
        } catch (error) {
            res.status(400).json({message : err.message});
    }
};

exports.getAllAdvertisementWithInfo = async (req , res)=>{
    try {
        const admin = await getAllAdvertisementWithInfo();
        res.status(200).json(admin);
    }catch(err){
        res.status(400).json({message : err.message})
    }
};

exports.getInfoUser =async (req , res)=> {
    const id= req.params.id;
    try {
        const admin =await getInfoUser(id);
        res.status(200).json(admin)
    } catch(err){
        res.status(400).json({message : err.message});
    }
};

exports.createUser = async (req , res)=> {
    try {
        const admin = await createUser(req.body);
        res.status(200).json(admin);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

exports.deleteUser = async (req , res)=>  {
    const id = req.params.id;
    try{
        const admin = await deleteUser(id);
        res.status(200).json(admin);
    }catch(err){
        res.status(400).json({ message : err.message });
    }      
};


exports.editUser = async (req , res)=> {
    const id = req.params.id ;
    const body = req.body;
    try{
        const admin = await editUser(id, body);
        res.status(200).json(admin);
    }catch(err){
        res.status(400).json({ message : err.message });
    }
};


exports.getAdvertisementForUser = async (req , res)=> {
    const id = req.params.id;
    try{
        const admin = await getAdvertisementForUser(id);
        res.status(200).json(admin);
    }catch(err){
        res.status(400).json({message : err.message});
    }
};

