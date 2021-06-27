const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ratingSchema = new schema({
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
    }
},{collection:"rating"})

module.exports=mongoose.model("Rating",ratingSchema);