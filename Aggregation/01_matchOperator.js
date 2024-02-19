import { connectionInstance, disconnectDB } from "../dbConnection.js";
import { User } from "../user.models.js";


connectionInstance()

const matchOpertors= await User.aggregate([
    {
        $match:{
            isActive:true //filter out the values based on given condition
        }
    }
])

console.log(matchOpertors);

//count the result return by match operator use count

const countOpertors= await User.aggregate([
    {
        $match:{
            isActive:true //filter out the values based on given condition
        }
    },
    {
        $count:"activeUsers" //count the output from first pipline and add activeUsers in Object
    }
])

console.log(countOpertors);
disconnectDB()