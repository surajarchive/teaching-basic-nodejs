import express from 'express';
import fs from 'fs'
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to my server")
})

app.get("/sign",(req,res)=>{
    const {file} =req.query;
    const {content}= req.query;
    fs.writeFile(file, content, (err) => {
      if (err) throw err;
      console.log("file created");
    });

    res.send("file is created ")
});


app.get("/rename",(req,res)=>{
    const {oldFile} =req.query;
    const {newFile}= req.query;
    fs.rename(oldFile, newFile, (err) => {
      if (err) throw err;
      console.log("file renamed");
    });

    res.send("file renamed successfully");
});


localhost:3000/
app.get('/:name',(req,res)=>{
    const {name} = req.params;
    res.send(`welcome to ${name} page`)
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})