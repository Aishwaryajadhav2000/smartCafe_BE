import foodSchema from "../models/Fooditems.models.js"

//To create a new food item
export async function createFoodItem(req, res, next) {
    try {
        const { description, foodname, foodprice, fooddiscount, foodfinalprice } = req.body

        const newFoodItem = new foodSchema({
            description, foodname, foodprice, fooddiscount, foodfinalprice
        });
        const createNewItem = await newFoodItem.save();
        return res.status(201).json({
            message: "Food item created succesfully",
            Food: createFoodItem
        })
    } catch (err) {

    }
}

//to display all the food item
export async function getAllFoodItems(req, res, next) {
    try {
        const getAllFoodItem = await foodSchema.find();
        return res.status(200).json({
            message: "List of food items",
            FoodItems: getAllFoodItem
        })
    } catch (err) {

    }
}


