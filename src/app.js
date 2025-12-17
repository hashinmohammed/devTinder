const express = require('express')
const app = express()

// TODO: if we use "use" it will always work even though we defined the  get and post
// app.use("/user", (req, res) => {
//   res.send({ firstName: "i will be first for post and get or whatever it is" });
//   console.log(req);
// });
app.get("/user", (req, res) => {
    res.send({firstName:"hashin"});
    console.log(req)
})
app.post("/user", (req, res) => {
    // saving data to DB
  res.send("hi from post request");
});
app.listen(3005, () => {
    console.log("Listening in port 3005")
})