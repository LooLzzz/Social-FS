import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./users/userRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get("/", (request, response) => { 
  response.status(200).send("Hello World");
}); 

//Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
})  