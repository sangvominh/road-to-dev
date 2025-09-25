const express = require("express");
const app = express();
app.listen(3000);

// ejs
const ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", {title: 'home'});
});

app.get("/about-me", (req, res) => {
  res.render("about.ejs", {title: 'about-me'});
});

app.use((req, res) => {
  res.render('404.ejs', {title: '404'})
})