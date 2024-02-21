import mongoose from "mongoose";
let connection
const connectionInstance = async()=>{

    try {
        connection= await mongoose.connect("mongodb+srv://akash:akash123@aksah.izz955k.mongodb.net/learndb")
        console.log("MogoDB connection successfull");
    } catch (error) {
        console.log("MongoDB Error: ", error)
        process.exit(1)
    }

}
const disconnectDB=async () =>{
    try {
        const closeDb=connection.disconnect()
        console.log("MongoDB Disconnected Successfully");
    } catch (error) {
        console.log("MongoDB disconnect Error: ", error)
        process.exit(1)
    }
}

export { connectionInstance,disconnectDB} 