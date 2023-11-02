import express from "express";

const app = express();
const port = 3000;

//custom middleware  --console.log HTTP request (GET,POST...)
function logger(req, res, next){
  console.log(req.method); //HTTP request
  console.log(req.url);   //endpoint
  next();
}
app.use(logger);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//bodyParser -> Preprocessing
//morgan -> HTTP Request Logging
//custom middleware -> Will try to make to do whatever we do

