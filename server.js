const express=require('express')
const dotenv=require('dotenv');
const dbConnect=require("./config/db")
const path=require('path')
const cors=require('cors');
const router=require('./routes/urlRoute')
const staticRouter=require('./routes/staticRoute')

dotenv.config();
const app=express();

dbConnect();
app.set('view engine','ejs');

app.set('views',path.resolve('./views'));


app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors());




app.use('/api',router)
app.use('/home',staticRouter)




app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const port=process.env.PORT || 4005;
app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})
