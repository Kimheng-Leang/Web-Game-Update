const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const adminRoutes = require('./routes/admin')
const bodyParser = require('body-parser');
// const fileUpload=require('express-fileupload')
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_Connect, {
	useNewUrlParser : true,
	useUnifiedTopology : true,
}).then(result=>{
	console.log("DB connected");
}).catch(err=>{
	console.log(err);
})
app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(apiRoutes);
app.use(adminRoutes);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.listen(process.env.PORT, ()=>{
	console.log(`Listening at port ${process.env.PORT}`);
})

