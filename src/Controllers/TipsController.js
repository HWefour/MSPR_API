const {getAllTips , postTips , tipsPlant} = require("../Models/tips");
const { post } = require("../Routes/PlantRoutes");


exports.getAllTips = async (req , res)=> {
    try {
        const tips = await getAllTips();
        res.status(200).json(tips)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}

exports.postTips = async (req , res)=> {
    const id = req.params.id
    try {
        const tips = await postTips(id);
        res.status(200).json(tips)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}

exports.tipsPlant = async (req , res)=> {
    const id = req.params.id
    try {
        const tips = await tipsPlant(id);
        res.status(200).json(tips)
    } catch (err) {
        res.status(400).json({message : err.message});
    }
}