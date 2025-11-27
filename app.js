import express from 'express';
import fs from 'fs'
const app = express();

app.get('/',(req,res)=>{

    res.send("welcome to my server")

})

app.get("/sign",(req,res)=>{
    const {file} =req.query;
    fs.writeFile(file,"hello",(err)=>{
        if(err) throw err;
        console.log("file created")
    })

    res.send("file is created ")
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})