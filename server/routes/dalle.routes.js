import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { promt } = req.body;
    const response = await openai.createImage({
      prompt,
      n:1,
      size:'1024x1024',
      response_format: 'b64_json'

    });

    const image = response.data.data[0].b64_json;
    res.status(200).json({ photo:image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something went wrong"});
  }
});

router.route;
export default router;
