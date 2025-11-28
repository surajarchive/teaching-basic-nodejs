import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import session from 'express-session';



app.use(cookieParser());
app.get("/", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);
});

app.listen(8080);