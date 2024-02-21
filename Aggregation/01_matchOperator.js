import { connectionInstance, disconnectDB } from "../dbConnection.js";
import { User } from "../user.models.js";
import { Author } from "./author.models.js";


connectionInstance()

const matchOpertors= await User.aggregate([
    {
        $match:{
            isActive:true //filter out the values based on given condition
        }
    }
])

// console.log(matchOpertors);

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

//Give number of Auhtors with black hair and A- blood grooup
const authorsCount=await Author.aggregate([
    {
        $match: {
          "hair.color": "Black",
          bloodGroup:"A-"
        },
    },
    {
        $count:"authorsWithBlackHairAndANegative"
    }
])

// console.log(authorsCount)
// console.log(countOpertors);

//Give names and gender of Auhtors with black hair and A- blood grooup
const authorsNameAndAge=await Author.aggregate([
    
        {
          $match: {
            "hair.color": "Black",
            bloodGroup:"A-"
          },
        },
        {
          $project: {
            username:1, //put 1 which filed you want to pass in the result
            gender:1
          }
        }
      
])



// console.log(authorsNameAndAge)

//Give the number of authors which have +63 at the starting of their phone number
//Regex in mathc 
const mobileNumberStartswith=await Author.aggregate(
    [
        {
          $match: {
              phone:/^\+86/
          }
        },
        {
            $count:"authorWithSepcialNumber"
        }
      ]
)

// console.log(mobileNumberStartswith)

//5 Recently created Authors : Sort and Limit
const recentlyCreatedUser=await Author.aggregate(
    [
        {
          $sort: {
            createdAt: -1
          }
        },
        {
         $limit: 5 
        },{
          $project: {
            username:1
          }
        }
      ]
)
console.log(recentlyCreatedUser)

disconnectDB()