const express = require("express");
require('./config');
const port=5000;
const UserInfo =require('./collection/userinfo')

const app = express();
app.post("/create",(req,resp) =>{
    console.log(resp,"resp////////////")
     const data=resp.send("Done")
     console.log(data)
})

app.listen(port);