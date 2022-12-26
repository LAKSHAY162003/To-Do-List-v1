//jshint esversion:6
 
const express = require("express");
const bodyParser = require("body-parser");
let tasks=["leetcode Contest","codeforces Contests","Sleep"];
const app = express();
 app.use(express.static("public"));
app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
  let today = new Date();
  let currentDay = today.getDay();
  let day = new Date().toLocaleString('en-us', {weekday: 'long'});
 
  res.render("list", {varName:day,tasks:tasks});
});
 
app.post("/",function(req,res){
    // console.log()
    tasks.push(req.body.add);
    console.log(tasks);
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("running on port 3000");
});  