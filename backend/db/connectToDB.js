import mongoose from "mongoose";

const connectToDB = async() => {
    try {

      await mongoose.connect(process.env.MONGODB_URI);
      console.log("coonected to mongoDB ")  

    } catch (error) {
      
        console.log("error to connect to mongoDB",error.message)
           
    }
}

export default connectToDB;