import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { chatbotPractice } from "./chatbot.js";
import { botAssisten} from "./chatbot.js";
import { registerUser } from "./register.js";
import { loginUser } from "./login.js";

import { translateUser, removeWord, getUserWords } from "./translate.js";



const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000", // Set the origin of your client
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));


app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.post('/api/translate', translateUser);
app.post('/api/chatbot', chatbotPractice);
app.post('/api/chatbot2', botAssisten);

app.delete("/api/translate/remove", removeWord);
app.get("/api/translate/getData", getUserWords);


app.listen(8800,() =>{
  console.log("connected")
});


