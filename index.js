//import statements
require("dotenv").config();
// need this on any file I use process.env
const express = require("express");
const morgan = require("morgan");
const app = express(); //
const apiRouter = require("./api/index");
//invoking express
const port = 3000;

app.use(morgan("dev")); // ???? uses on all verb types
// setup above here ^^^^

//route handling here:
// localhost:3000/ <--- sends an html

async function reqBodyCheck(req, res, next) {
  //imported from another file
  console.log(req.body);
  next();
}

app.use("/", reqBodyCheck); //using a callback function

// app.use("/api", async (req, res, next) => {
//   // go to /api --> anything else
//   console.log("in api");
// });

app.use("/api", apiRouter);
// app.get('/api/products', cb)
// app.get('/api/users', cb)
// app.get('/api/carts', cb)
// app.get('/api/cartItems', cb)

// app.post...

// app.patch...

// app.delete...

// end below here vvv
app.listen(port, () => {
  console.log(`we're up and running on ${port}`);
});
