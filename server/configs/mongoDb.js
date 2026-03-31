import mongoose from "mongoose";

const connectMongoDb=async()=>{
  mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDb");
  })

  await mongoose.connect(`${process.env.MONGODB_URI}/infinity`)

}


export default connectMongoDb;