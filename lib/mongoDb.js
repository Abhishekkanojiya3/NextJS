import mongoose from "mongoose";

const connectDB = async() => {
  try{

    if(mongoose.connection.readyState === 0){
      await mongoose.connect("mongodb+srv://abhishek:abhi@cluster0.b6l5fmi.mongodb.net/")

      console.log("db connected")
    }

  }catch(err){
        console.log(err)
  }
}

export default connectDB;