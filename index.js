const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adminRoute =require("./routes/admin");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cors = require("cors");
const port = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex: true
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/admins",adminRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(port,() => {
  console.log("Backend server is running!"+port);
});

