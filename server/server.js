import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDb.js';
import { clerkWebhooks } from './controllers/usercontroller.js';
import userRouter from './routes/userroutes.js';




const PORT=process.env.PORT||4000;
const app=express();
await connectDB();



app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>res.send("api working"));
app.post(
  '/api/user/webhooks',
  express.raw({ type: 'application/json' }),
  clerkWebhooks
);
app.use('/api/user',userRouter)

app.listen(PORT,()=>console.log("server running on port "+PORT));