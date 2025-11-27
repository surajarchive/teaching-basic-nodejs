import express from 'express';
const app = express();

app.get('/',(req,res)=>{

    res.send("welcome to my server")

})

app.get("/sign",(req,res)=>{
    const {name} =req.query;
    res.send(`your name is ${name}`)
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})