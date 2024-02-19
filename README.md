# MongoDB
Operations on MongoDB

## Handling MongoDB operations using Mongoose

### 1. Connection to MongoDB using Mongoose:

```javascript
    const connectionInstance = async()=>{

    try {
        const connection= await mongoose.connect("Connection URL")
        console.log("MogoDB connection successfull");
    } catch (error) {
        console.log("MongoDB Error: ", error)
        process.exit(1)
    }

}
```

### 2. Create Basic Schema

```javascript
    import mongoose from "mongoose";      

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },

},{timestamps:true})

export const User= mongoose.model("User",userSchema)

//it will create a database for the define shema and set the name in lowercase in pulalr form 
//e.g User --> users
```

### 3. Fetch All records 
```javascript
    //get all records(files) from MongoDB
    const users=await User.find({})
    console.log(users);

```
### 4. Insert new Record
```javascript
    // Inser new user in MongoDb using Mongoose

    const newUser = new User()
    newUser.firstname="Akash"
    newUser.lastname="Chauhan"
    newUser.email="akash@akash.com"
    newUser.dob=Date.now()

    const savedUser= await newUser.save()
    console.log(savedUser);

```

### 5. Update the Records

> By fetching the records and update it and then save the schema using save method
```javascript
    const userToBeUpdated= await User.findOne({firstname:"Akash"})
    console.log("User: ", userToBeUpdated);
    userToBeUpdated.email="akash.akash@gmail.com"
    const updatedUser=await userToBeUpdated.save()
    console.log("updated User: ", updatedUser);
```
> By moongoose FindOneAndUpdate method
```javascript
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
```