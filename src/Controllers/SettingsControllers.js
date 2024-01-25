const {getInfoAccount , deleteAccount , editInfoAccount} = require("../Models/Settings");


exports.getInfoAccount = async  (req , res)=> {
    id = req.params.id ;
    try {
        const settings = await getInfoAccount(id);
        res.status(200).json(settings);                             // add the body params
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
};

exports.deleteAccount = async (req , res)=> {
    id = req.params.id;
    try {
        const settings = await deleteAccount(id);
        res.status(200).json(settings);                             // add the body params
    }catch (err) {
        res.status(400).json({message : err.message});
    }
};

exports.editInfoAccount = async (req , res)=> {
    id = req.params.id;
    try {
        const settings = await editInfoAccount(id , req.body);
        res.status(20).json(settings);                              // add the body params
    }catch(err){
        res.status(400).json({message : err.message});
    }
};
