const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
// ejs
const ejs = require("ejs");
app.set("view engine", "ejs");

// morgan & static file
app.use(morgan("dev"));
app.use(express.static("public"));

// connect to database
const dbURI = "mongodb+srv://vosang20102005_db_user:1234@cluster0.zpjdb3o.mongodb.net/mydb";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log("err"));

// mongoose db and mongo sandbox route
app.get("/create-blog", (req, res) => {
  const blog = new Blog({
    title: "my title blog",
    snippet: "my snippet",
    body: "my body blog",
  });

  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/all-blog", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("68d68fef710b99abfa9917c4")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "home" });
});

app.get("/about-me", (req, res) => {
  res.render("about.ejs", { title: "about-me" });
});

app.use((req, res) => {
  res.render("404.ejs", { title: "404" });
});
