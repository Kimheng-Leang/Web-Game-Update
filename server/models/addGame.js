const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gameSchema = new schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    OriginalPrice:{
        type:String,
        required:true
    },
    DiscountPrice:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    postedDate:{
        type:String,
        required:true
    },
    // SupportOS:{
    //     Window:{
    //         type:String,
    //     },
    //     Apple:{
    //         type:String,
    //     }
        
    // }
    SupportOS:{
        type:String,
        required:true
    },
    // ImgPath:{
    //     type:String,
    //     required:true
    // },
    // SourceFile:{
    //     type:String,
    //     required:true
    // },
},{collection:"games"})

const Game = mongoose.model('game',gameSchema)

module.exports={
    Schema:gameSchema,
    Game
}