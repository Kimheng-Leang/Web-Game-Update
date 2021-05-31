const game = require('../models/addGame').Game;
const news =require('../models/addNews')
//add Game
exports.addGame=(req,res)=>{
    const Game = new game({
        Title: req.body.title,
        Description: req.body.description,
        OriginalPrice: req.body.original_price,
        DiscountPrice: req.body.discount_price,
        Price: req.body.original_price-req.body.discount_price,
        Type:req.body.type,
        SupportOS: req.body.support_os,
        postedDate: new Date().toISOString(),
        // ImgPath: img_path,
        // SourceFile: source_file,
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
    const News = new news({
        Title:req.body.title,
        Description: req.body.description,
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
