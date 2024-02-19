// $divide: [{$subtract: [ new Date(), "$Demographics.DOB" ] }, 
//                     (365 * 24*60*60*1000)]
import { connectionInstance, disconnectDB } from "../dbConnection.js";
import { User } from "../user.models.js";

connectionInstance()

const averageUserAge= await User.aggregate([
    //Stage1: Adds new filed age using dob
    {
        $project:{
            age:{
                $divide:[{$subtract: [ new Date(), "$dob" ] }, (365*24*60*60*1000)] //calculating Age from DOB
                                   
            },
       }
    },

    //Stage2: group the whole document and gives average using $avg operators
    {
        $group:{
            // _id:"$age" //group by age
            _id: null, //group all the document
            averageAge:{
                $avg:"$age" //calculate whole document age average :[ { _id: null, averageAge: 33.622091868214106 } ]
            }

        }
    }


])

//console.log(averageUserAge);

const topThreeLovedFruits= await User.aggregate([
    {
        $group:{
            _id:"$favFruit",
            count:{
                $sum:1 //Add 1 to previos value  [ { _id: 'banana', count: 2 }, { _id: 'Apple', count: 1 } ]
            }
        }
    },
    {
        $sort:{
            count: -1 //-1 sort the document from high to low 
        } 
    },
    {
        $limit:1 //limit the number of records e.g limit:2 gives top 2 records only
    }
    

])

console.log(topThreeLovedFruits);


disconnectDB()