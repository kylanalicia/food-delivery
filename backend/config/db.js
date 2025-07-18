import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kylan:AliciaKimani@cluster0.uj3x8al.mongodb.net/foodDelivery').then(()=>console.log("DB Connected"));
}