// Author: Mel Vincent Anonuevo
// Student ID: 301167069
// Date: Feb 1, 2022

const { Mongoose } = require("mongoose")

// module.exports = {
//     "DB_CONNECTION":"mongodb+srv://dbadmin:5WwaSJObLquB5cKz@comp229-mel.bmpbg.mongodb.net/COMP229-002"
// }

let DB_CONNECTION ="mongodb+srv://dbadmin:5WwaSJObLquB5cKz@comp229-mel.bmpbg.mongodb.net/COMP229-002"

//Database Setup

module.exports = function(){

    //Connect to the DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    
    mongoDB.on('error', console.error.bind(console,'Connection Error: '));
    mongodDB.once('open', ()=>)
}
