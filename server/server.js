import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectMongoDB from './configs/mongoDb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';



const PORT=process.env.PORT||4000;
const app=express();
await connectMongoDB();


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.send("api working"));
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)


app.listen(PORT, () => console.log("server running on port " + PORT));