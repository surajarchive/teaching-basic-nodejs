import express from 'express';
const app = express();
import fs from 'fs';

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/signin', (req, res) => {
    const {file} = req.query;
    const {content} = req.query;
    fs.writeFile(file, content, (err) => {
      if (err) throw err;
      console.log('File created successfully.');
    });


    res.send(`Hello, ${file}! You have signed in successfully.`);
});


app.get('/rename', (req, res) => {
  const {oldName} = req.query;
  const {newName} = req.query;  
  fs.rename(oldName, newName, (err) => {
    if (err) throw err;
    console.log('File renamed successfully.');
  });    
});
app.get('/readfile',(req,res)=>{
    const {file} = req.query;
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
        res.send(`Content of ${file}: ${data}`);
    });
    // res.send(`Read file request received for ${file}`);
})
// app.get('/deletefile',(req,res)=>{
//     const {file} = req.query;
//     fs.unlink(file, (err) => {
//         if (err) throw err;
//         console.log('File deleted successfully.');
//     });
//     res.send("file deleted successfully");

// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});