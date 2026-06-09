import { createFoodItem, getAllFoodItems } from "../controllers/fooditem.controller.js";


export function foodRoute(app){
    app.post("/api/createitem" , createFoodItem);

    app.get("/api/getfooditem" , getAllFoodItems);

    
}
