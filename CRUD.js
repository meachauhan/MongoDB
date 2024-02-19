import { disconnectDB, connectionInstance } from "./dbConnection.js";
import { User } from "./user.models.js";


connectionInstance()

//get all records(files) from MongoDB
const users=await User.find({})
// console.log(users);


// Insert new user in MongoDb using Mongoose

// const newUser = new User()
// newUser.firstname="Akash"
// newUser.lastname="Chauhan"
// newUser.email="akash@akash.com"
// newUser.dob=Date.now()

// const savedUser= await newUser.save()
// console.log(savedUser);

// Updating new User

const updatedUser= await User.findOneAndUpdate(
    {
        firstname:"Akash" //filter for which name you want to change the values
    },
    {
        email:"akas.akash@akash.com" //Values that you want to change
    },
    {
        new:true
    }
)
console.log(updatedUser);

// const userToBeUpdated= await User.findOne({firstname:"Akash"})
// console.log("User: ", userToBeUpdated);
// userToBeUpdated.email="akash.akash@gmail.com"
// const updatedUser=await userToBeUpdated.save()
// console.log("updated User: ", updatedUser);

//Delete One Operation

// const deletedUser=await User.deleteOne({firstname:"Akash"})
//return Objected that includes { acknowledged: true, deletedCount: 1 }
//To delete multiple entries:    User.deleteMany({filter})
// console.log("Deleted Value: " ,deletedUser);





disconnectDB()