import express from 'express';
const app = express();
import fs from 'fs';

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/signin', (req, res) => {
    const {file} = req.query;
    fs.writeFile("parna.txt", `Hello, ${file}! You have signed in successfully.`, (err) => {
        if (err) throw err;
        console.log("File created successfully.");
    });

    res.send(`Hello, ${file}! You have signed in successfully.`);
});





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});