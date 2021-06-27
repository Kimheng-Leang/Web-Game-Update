const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Files:{
        type:Array,
        required:true
    },
    postedDate:{
        type:String,
        required:true
    }
},{collection:'news'});

module.exports=mongoose.model("News",newsSchema);