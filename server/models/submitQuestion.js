const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    Question:{
        type:String,
        required:true
    },
    User:{
        type:String,
        required:true,
    },
    User_ID:{
        type:String,
        required:true
    },
    postedDate:{
        type:Date,
    }
},{collection:'questions'});

module.exports=mongoose.model("Question",questionSchema);