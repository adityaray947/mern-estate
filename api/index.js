import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authrouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from "cookie-parser";
import path from 'path';
dotenv.config();

mongoose.connect(process.env.mongo).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>
{
    console.log(err);
})
const app =express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log("server is running");
});
const __dirname = path.resolve();

app.use("/api/user",userRouter);
app.use("/api/auth",authrouter);
app.use("/api/listing",listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  })

app.use((err,req,res,next)=>{
    const statusCode=err.statuscode || 500;
    const message=err.message || 'internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });
});
