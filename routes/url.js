const express=require('express');
const { handleGenerateNewShortnerUrl,handleGetAnalytics } = require('../controllers/url');

const router=express.Router();

router.post("/",handleGenerateNewShortnerUrl)
router.get('/analytics/:shortId',handleGetAnalytics)

module.exports=router;