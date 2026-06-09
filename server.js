import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import { foodRoute } from "./routes/food.route.js";

const app = new express();

app.use(cors());
app.use(express.json());
const PORT = 8000;

foodRoute(app);

mongoose.connect('mongodb+srv://aishwaryaj1608_db_user:4Aqn3QGtob4K9WDI@smartcafe.9l7nh6o.mongodb.net/').then(()=>{
    console.log("DB connected successfully");
    app.listen(PORT , ()=>{
        console.log(`Server connected at PORT : ${PORT}`);
    })
}).catch((err)=>{
    console.log(err , "error while connecting DB")
})

app.listen(5100, () => {
    console.log("server is running on port 5100")
});


app.get('/', (req, res) => {
    res.send("Welcome to root route")
})

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://smart-cafe-fe.vercel.app/"
]

app.use(cors({
    origin : allowedOrigins
}))

