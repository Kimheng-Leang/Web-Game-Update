const game = require('../models/addGame').Game;
const news =require('../models/addNews')
const question = require('../models/submitQuestion')
//add Game
exports.addGame=(req,res)=>{
    const reqFiles=[]
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }
    const Game = new game({
        Title: req.body.title,
        Description: req.body.description,
        OriginalPrice: req.body.original_price,
        DiscountPrice: req.body.discount_price,
        Price: req.body.original_price-req.body.discount_price,
        Type:req.body.type,
        SupportOS: req.body.support_os,
        Files:reqFiles,
        SourceFile:req.body.source_file,
        Views:0,
        Rating:0,
        postedDate: new Date().toISOString(),
    }).save().then(results=>{
        console.log(results);
        res.json({"message":"New game is created","data":results})
    }).catch(err=>{
        console.log(err);
    })
}
//edit one game
exports.editGame=(req,res)=>{
    const gameID=req.params.gameID;
    console.log(gameID);
    game.findById(gameID).then(result=>{
        result.Title=req.body.title,
        result.Description=req.body.description,
        result.OriginalPrice=req.body.original_price,
        result.DiscountPrice=req.body.discount_price,
        result.Price= req.body.original_price-req.body.discount_price,
        result.Type=req.body.type,
        result.SupportOS=req.body.support_os
        result.Rating=req.body.rating
        result.Views=req.body.views
        res.json(result)
        return result.save();
    }).catch(err=>{
        console.log(err);
    })
}
//delete game
exports.deleteGame=(req,res)=>{
    const gameID=req.params.gameID;
    console.log(gameID);
    game.findByIdAndDelete(gameID).then(result=>{
        console.log(result);
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    })
}
//get one game
exports.getOneGame=(req,res)=>{
    const gameID=req.params.gameID;
    console.log(gameID);
    game.findById(gameID).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
}
// get all games
exports.getGames=(req,res)=>{
    game.find().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
}
//add News
exports.addNews=(req,res)=>{
    console.log(req.files);
    const reqFiles=[]
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }
    const News = new news({
        Title:req.body.title,
        Description: req.body.description,
        Files:reqFiles,
        postedDate: new Date().toISOString(),
    }).save().then(result=>{
        console.log(result);
        res.json({"message":"News is created","data":result});
    }).catch(err=>{
        console.log(err);
    })
}
//edit News
exports.editNews=(req,res)=>{
    const newsID=req.params.newsID;
    console.log(newsID);
    // console.log("editNews is called");
    news.findById(newsID).then(result=>{
        result.Title=req.body.title,
        result.Description=req.body.description,
        res.json(result)
        return result.save();
    }).catch(err=>{
        console.log(err);
    })
}
//delete news
exports.deleteNews=(req,res)=>{
    const newsID=req.params.newsID;
    console.log(newsID);
    news.findByIdAndDelete(newsID).then(result=>{
        console.log(result);
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    })
}
//get one news
exports.getOneNews=(req,res)=>{
    const newsID=req.params.newsID;
    news.findById(newsID).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err)
    })
}
//get add News
exports.getNews=(req,res)=>{
    news.find().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
}
//downloadGame
exports.downloadGame=(req,res)=>{
    const gameID=req.params.gameID;
    const path=require('path')
    console.log(gameID);
    game.findById(gameID).then(result=>{
        res.sendFile(path.join(__dirname,'../public/')+result.SourceFile);
        
    }).catch(err=>{
        console.log(err);
    })
}
//post question
exports.submitQuestion=(req,res)=>{
    const Ques = new question({
        Question:req.body.question,
        User:"Kimheng",
        User_ID:"1",
        postedDate: new Date().toISOString(),
    }).save().then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })
}
//comment with rating
const comment = require('../models/comment')
exports.commentedGame=(req,res)=>{
    const Comment = new comment({
        userID:req.body.userid,
        userName:req.body.username,
        gameID:req.body.id,
        Stars:req.body.stars,
        Comment:req.body.comment,
        commentedAt: new Date().toISOString(),
    }).save().then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })
}
exports.getCommentByGameID=(req,res)=>{
    const gameID=req.params.gameID
    comment.find({"gameID":gameID}).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })
}
const rating = require('../models/rating')
// create rating
exports.ratingGame= (req,res)=>{
    const Rating = new rating({
        userID:req.body.userid,
        userName:req.body.username,
        gameID:req.body.gameid,
        Stars:req.body.stars,
    }).save().then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })
}
// get all rating
exports.getRatingByGameID=(req,res)=>{
    const gameID=req.params.gameID
    rating.find({"gameID":gameID}).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err);
    })
}
// get one rating by userID
// exports.getOneRating=(req,res)=>{
//     const gameID=req.params.gameID
//     rating.findOne({"gameID":gameID}).then(result=>{
//         res.json(result);
//     }).catch(err=>{
//         console.log(err);
//     })
// }
// update rating by ratingID
exports.editedRating=(req,res)=>{
    const ratingID=req.params.ratingID
    rating.findById(ratingID).then(result=>{
        result.Stars=req.body.stars
        result.userID=req.body.userid
        result.userName=req.body.username
        result.gameID=req.body.gameid
        res.json(result)
        return result.save();
    }).catch(err=>{
        console.log(err);
    })
}