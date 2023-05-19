const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
connectDB();
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});
// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });
app.use("/api/user", userRoutes);
// app.user(notFound)
// app.user(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`.yellow.bold));
