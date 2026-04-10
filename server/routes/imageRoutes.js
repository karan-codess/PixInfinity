import express from "express";
import { removeBgImage ,upscaleImage ,removeText ,uncropImage ,cleanupImage } from "../controllers/imageController.js";
import upload from "../middlewares/multer.js";

import authUser from "../middlewares/auth.js";

const imageRouter=express.Router();

imageRouter.post('/remove-bg', authUser, upload.single('image'), removeBgImage);
imageRouter.post('/upscale', authUser, upload.single('image'), upscaleImage);
imageRouter.post('/remove-text', authUser, upload.single('image'), removeText);
imageRouter.post('/uncrop', authUser, upload.single('image'), uncropImage); 
imageRouter.post('/cleanup', authUser, upload.single('image'), cleanupImage);


export default imageRouter;