const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: './config.env'})

const testSchema = new mongoose.Schema({
    
    question :{
       type : String
    } ,
    optionA :{
        type : String
     } ,
    optionB : {
        type : String
     } ,
    optionC : {
        type : String
     } ,
    optionD :{
        type : String
     } ,
    answer :{
        type : String
     } 
    

});

const JavaTest = mongoose.model( 'JavaTest' , testSchema);
module.exports = JavaTest;


