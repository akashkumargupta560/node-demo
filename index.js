const express = require("express");
require('./config');
const port=5000;
const UserInfo =require('./collection/userinfo')

const app = express();
app.use(express.json());
app.post("/create", async (req,res) =>{
    // let data = new UserInfo(req.body);
    // let result = await data.save();
    // console.log(result)
    console.log(req.body)
    res.send("Done")
    // res.send(result)
  
})

app.listen(port);