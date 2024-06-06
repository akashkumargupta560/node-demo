const express = require("express");
require('./config');
const port=5000;
const Users=require('./model/userinfo')

const app = express();
app.use(express.json());

//POST API CREATE
app.post("/create", async (req, resp) => {

    let userData = req.body;
    let data = new Users(userData);
    try {
        let result = await data.save();
        console.log(result);
        resp.send(result);
    } catch (error) {
        console.error(error);
        resp.status(500).send("Error creating user");
    }
});

//GET OR LIST API CREATE 
app.get("/list",async (req,resp)=>{
    let data = await Users.find()
    try{
        resp.send(data);
    }catch(error){
        console.error(error);
        resp.status(500).send("Error creating user");
    }
});

//DELETE API CREATE
app.delete("/delete/:_id", async (req,resp)=>{
    // console.log(req.params)
    let data = await Users.deleteOne(req.params);
    resp.send(data)
});

//UPDATE API CREATE
app.put("/update/:_id", async (req,resp)=>{
    let data = await Users.updateOne(
        //condition
        req.params,
        //$set updated data
        {
            $set:req.body
        }
    );
    resp.send(data);
})

app.listen(port);