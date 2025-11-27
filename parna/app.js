import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/signin', (req, res) => {
    const {name} = req.query;
    res.send(`Hello, ${name}! You have signed in successfully.`);
});





app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});