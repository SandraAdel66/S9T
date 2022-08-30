const express=require("express");
const fs=require("fs");
let un=express();
un.listen(7080,function(){
    console.log("This server is working on 7080 port")
})
un.get("/",function(req,res){
    let username=req.query.names;
    fs.readFile("names.txt",function(err,data){
        fs.writeFile("names.txt",data+"\n"+username,function(){
            console.log("done")
        })
    })
    res.json({
        UserNames:username
    })
})
