const express = require('express');
const router = express.Router();
const User = require('./../models/user').User;
const jwt = require('jsonwebtoken');
const Parser = require('rss-parser');
const parser = new Parser();

function isAuthenticated(req, res, next){
	let header = req.get('Authorization') ?? "";
	let noAuth = {err : 'invalid token', noAuth : false};
	if(header.toLowerCase().indexOf('bearer') === -1){
		return res.status(401).send(noAuth);
	}
	let token = header.split(" ")[1];

	if(!token){
		return res.status(401).send(noAuth);
	}

	jwt.verify(token, process.env.SECRET, (err, decoded) =>{
		if(err) return res.status(401).send(noAuth);
		User.findById(decoded.id, (err,user) =>{
			if(err) return res.status(401).send(noAuth);
			req.readerUser = user;
			next();
		})
	})
}

router.get('/feeds', isAuthenticated, (req, res) =>{
	res.send({feeds: req.readerUser.feeds})
});

router.post('/feeds', isAuthenticated, (req, res) =>{
	let name = req.body.name;
	let url = req.body.url;
	let user = req.readerUser;

	if(!name || !url){
		return res.status(422).send({
			err : 'Plase add name or url'
		});
	}

	user.feeds.push({
		name,
		url
	});

	user.save();

	res.send(({feeds: user.feeds}))
});

router.delete('/feeds/:recordId', isAuthenticated,(req, res) => {
	let user = req.readerUser;
	let recordId = req.params.recordId;

	let index = user.feeds.findIndex(r => r._id == recordId);
	if(index > -1){
		user.feeds.splice(index, 1);
	}
	user.save();
	res.send({ feeds : user.feeds });
});

router.get('/feeds/:recordId', isAuthenticated, (req, res) =>{
	let user = req.readerUser;
	let recordId = req.params.recordId;

	let index = user.feeds.findIndex(r => r._id == recordId);
	if(index === -1){
		return res.status(401).send({err : 'not found'});
	}
	let feed = user.feeds[index];

	parser.parseURL(feed.url).then(feed =>{
		res.send(feed);
	});
});

module.exports = router;