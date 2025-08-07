const express=require('express');
const staticRouter=express.Router();
const URL = require("../model/url");


 staticRouter.get ('/',async(req,res)=>{
const result=await URL.find()
   res.render('home',{data:result})
  })


module.exports=staticRouter;