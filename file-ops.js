import fs from 'fs';


//create a file
fs.writeFile("parna.txt","Hello parna",(err)=>{
    if(err) throw err;
    console.log("File created");
})


// reading a file

fs.readFile("parna.txt",'utf-8',(err,data)=>{
    if(!err){
        console.log(data)
    }else console.log(err)

})

// update a file

fs.appendFile("parna.txt","\n How are you?",(err)=>{
    if(err) throw err;
    console.log("File updated");
})



// delete a file

fs.unlink("parna.txt",(err)=>{
    if(err) throw err;
    console.log("File deleted");
})







