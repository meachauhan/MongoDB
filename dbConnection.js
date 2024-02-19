import mongoose from "mongoose";

const connectionInstance = async()=>{

    try {
        const connection= await mongoose.connect("mongodb+srv://akash:akash123@akash.izz955k.mongodb.net/")
        console.log("MogoDB connection successfull");
    } catch (error) {
        console.log("MongoDB Error: ", error)
        process.exit(1)
    }

}

export default connectionInstance