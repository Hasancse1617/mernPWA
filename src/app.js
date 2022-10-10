const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/admin/UserRoute");


const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/api/", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});