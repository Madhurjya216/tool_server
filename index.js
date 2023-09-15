require("dotenv").config();
const express = require("express");
const port  = 8080;
const app = express();
const {backPost, bicepsPost, shoulderPost, tricepPost, chestPost, legPost} = require('./routes/postRoute');
const {getBack, getChest, getBiceps, getTriceps, getShoulder, getLegs} = require('./routes/getRoutes');
const db = require("./db/dbConnection");
const cors = require("cors");


// db connection
db();;

// middleware
app.use(express.json());
app.use(cors());
 
// post routes 
app.use("/post", backPost);
app.use("/bicepspost", bicepsPost);
app.use("/shoulderpost", shoulderPost);
app.use("/triceppost", tricepPost); 
app.use("/chestpost", chestPost);
app.use("/legpost", legPost);

// get routes
app.use("/getBack", getBack);
app.use("/getChest", getChest);
app.use("/getBiceps", getBiceps);
app.use("/getTriceps", getTriceps);
app.use("/getShoulder", getShoulder);
app.use("/getLegs", getLegs);

// server is listening 
app.listen(port, () => {
    console.log(`listening on port ${port}`);  
})



