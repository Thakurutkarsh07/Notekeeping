// const mongoose = require("mongoose");

// //connection string for database (specify the database name 'inotebook')
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// //syntax// connectToMongo is a function which uses built-in function mongoose.connect(which takes a the URI(connnection string), and a callback function))
// const connectToMongo = () =>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected to mongo");
//     })
// }

// module.exports = connectToMongo; 


const {connect} = require("mongoose");

const MONGO_URL = "mongodb+srv://utkarshthakur0110:user123@inotebook.ddswsof.mongodb.net"
const DB_NAME = "inotebook";

async function conn(){
    try {
    await connect(`${MONGO_URL}/${DB_NAME}`).then(()=>{
    console.log("Mongo is connected")})  
    } catch (err) {
        console.error(err)
}}

module.exports = conn; 
