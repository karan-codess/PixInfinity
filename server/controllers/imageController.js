import axios from "axios";
import fs from "fs";
import formData from "form-data";
import userModel from "../models/usermodel.js";

const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "Not enough credits",
        creditBalance: user.creditBalance,
      });
    }
    const imagePath = req.file.path;

    const imageFile = fs.createReadStream(imagePath);
    const formdata = new formData();
    formdata.append("image_file", imageFile);
    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      },
    );
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });
    console.log("Credit deducted! New balance:", user.creditBalance - 1);
    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background Removed",
    });

    //         await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

    // console.log("Credit deducted! New balance:", user.creditBalance - 1); // ✅ add this
    // console.log("Response being sent:", { success: true, creditBalance: user.creditBalance - 1 }); // ✅ add this

    // res.json({ success: true, resultImage, creditBalance: user.creditBalance - 1, message: "Background Removed" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const upscaleImage = async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await userModel.findOne({ clerkId });
    
    if (!user) return res.json({ success: false, message: "User not found" });
    if (user.creditBalance === 0) {
      return res.json({ success: false, message: "Not enough credits", creditBalance: 0 });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);
    const formdata = new formData();
    formdata.append("image_file", imageFile);

    formdata.append("target_width", 2048);
    formdata.append("target_height", 2048);

    const { data } = await axios.post(
      "https://clipdrop-api.co/image-upscaling/v1/upscale",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Image Upscaled",
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const removeText = async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await userModel.findOne({ clerkId });

    if (!user) return res.json({ success: false, message: "User not found" });
    if (user.creditBalance === 0) {
      return res.json({ success: false, message: "Not enough credits", creditBalance: 0 });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);
    const formdata = new formData();
    formdata.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-text/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formdata.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Text Removed",
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const uncropImage = async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await userModel.findOne({ clerkId });

    if (!user) return res.json({ success: false, message: "User not found" });
    if (user.creditBalance === 0) {
      return res.json({ success: false, message: "Not enough credits", creditBalance: 0 });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);
    const formdata = new formData();
    formdata.append("image_file", imageFile);
    
    // extend karne ki direction aur size
    formdata.append("extend_left", 200);
    formdata.append("extend_right", 200);
    formdata.append("extend_up", 200);
    formdata.append("extend_down", 200);

    const { data } = await axios.post(
      "https://clipdrop-api.co/uncrop/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formdata.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Image Uncropped",
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
const cleanupImage = async (req, res) => {
  try {
    const { clerkId } = req.user;
    const user = await userModel.findOne({ clerkId });

    if (!user) return res.json({ success: false, message: "User not found" });
    if (user.creditBalance === 0) {
      return res.json({ success: false, message: "Not enough credits", creditBalance: 0 });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);
    const formdata = new formData();
    formdata.append("image_file", imageFile);
    formdata.append("mask_file", imageFile); // ✅ cleanup ko mask chahiye

    const { data } = await axios.post(
      "https://clipdrop-api.co/cleanup/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formdata.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Image Cleaned Up",
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage, upscaleImage , removeText, uncropImage, cleanupImage };