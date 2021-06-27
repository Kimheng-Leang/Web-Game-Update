const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = new schema({
    userID:{
        type:String
    },
    userName:{
        type:String
    },
    gameID:{
        type:String,
    },
    Stars:{
        type:Number
    },
    Comment:{
        type:String
    },
    commentedAt:{
        type:String
    }
},{collection:"comments"})

module.exports=mongoose.model("Comment",commentSchema);