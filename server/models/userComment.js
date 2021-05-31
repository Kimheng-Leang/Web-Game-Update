const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userComment = new Schema({
    content:{
        type:String,
        required:true
    },
    commentedAt:{
        type: new Date,
        required:true
    },
    commentedBy:{
        type:String,
        required:true
    },
    gameID:{
        type:String,
        required:true
    }
},{collection:"comments"})
module.exports=mongoose.model("Comment",userComment)