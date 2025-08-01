const {nanoid}=require("nanoid");
const URL=require('../models/url')

async function handleGenerateNewShortnerUrl(req,res){
  const body=req.body;
  if(!body.url) return res.status(400).json({error:"url is required"})
  const shortID=nanoid(8);

  await URL.create({ shortId:shortID,
    redirectURL:body.url,
  
  visitHistory:[],
createdBy:req.user._id,
})

  const allUrls = await URL.find({});

  return res.render("home",{
    id:shortID,
     urls: allUrls,
  });
 



}
async function handleGetAnalytics(req,res){
  const shortId=req.params.shortId;
  const result=await URL.findOne({shortId});
  return res.json({totalCLicks:result.visitHistory.length,analytics: result.visitHistory})
}

module.exports={
  handleGenerateNewShortnerUrl,
  handleGetAnalytics
}