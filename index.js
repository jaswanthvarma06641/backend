// setting up the server
// CVQnBTOXufqP0fts
const express=require("express");
const dotEnv=require("dotenv");
const mongoose=require("mongoose");
const vendorRoutes=require("./routes/vendorRoutes");
const firmRoutes=require("./routes/firmRoutes");
const productRoutes=require("./routes/productRoutes");
const bodyparser=require("body-parser");
// const cors=require('cors');
const path=require('path');
// create the instance
const app=express()
const PORT=process.env.PORT || 4000;

// to access .env values
dotEnv.config()

// after connect need to give promise with then and catch
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo connected succesfully"))
.catch((error)=>console.log(error))
// middleware
app.use(bodyparser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

// start the server and binds it with the given port
app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`)
})

app.use('/',(req,res)=>{
    res.send("<h1> Welcome")
})