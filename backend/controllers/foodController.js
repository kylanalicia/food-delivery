import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food Item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        
    })
    try {
        await food.save();
        res.json({success: true, message: "Food Added"});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error while adding food item"});

    }

}

// All food items
const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, foods});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error while fetching food items"});


    }

}

// Delete food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food Deleted"});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error while deleting food item"});
        
    }
    
}

export { addFood, listFood, removeFood };