import session from 'express-session';
import express from 'express';
const app = express();
app.use(express.json());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));



const db = [];
let id = 0;


app.post('/register',(req,res)=>{
    try {
        const {name,email,password} = req.body; // user se lega
        const user = {id: ++id, name,email,password}; // objects
        db.push(user);
        res.status(201).send({message:"User registered successfully"});
    } catch (error) {
        res.status(500).send({message:"Internal Server Error" });   
    }
})



app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body; 

    const user = db.find(x=>x.email === email && x.password === password);

    if (!user) {
      res.status(401).send({ message: "Invalid email or password" });
    }
    const token = user.id + "-" + new Date().getTime();
    res.cookie("token", token, { httpOnly: true });

    res.send({ message: "Login successful" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});







app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


