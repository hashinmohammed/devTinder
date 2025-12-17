const express = require('express')
const app = express()
const {auth}=require("./middlewares/auth")
// app.use("/user",auth )
app.use("/user",auth, (req, res) => {
  res.status(401).send("unautherised login");
});
app.listen(3005, () => {
    console.log("Listening in 3005")
})