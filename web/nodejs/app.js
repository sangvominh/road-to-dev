const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
// ejs
const ejs = require("ejs");
const { result } = require("lodash");
app.set("view engine", "ejs");

// morgan & static file
// app.use(morgan("dev"));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// connect to database
const dbURI = "mongodb+srv://vosang20102005_db_user:1234@cluster0.zpjdb3o.mongodb.net/mydb";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log("error in connect to database", err));

// routes
app.get("/", (req, res) => {
  res.render("index.ejs", { title: "home" });
});

app.get("/blog", (req, res) => {
  Blog.find()
    .then((result) => res.render("blog.ejs", { title: "All blog", blog: result }))
    .catch((err) => console.log("error in get blog", err));
});

app.post("/blog", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blog"))
    .catch((err) => console.log("error in create blog", err));
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.render("blog-detail.ejs", { title: "Blog Detail", blog: result }))
    .catch((err) => console.log("error in get blog detail", err));
});

app.delete("/blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blog" }))
    .catch((err) => console.log("error in delete blog", err));
});

app.get("/create-blog", (req, res) => {
  res.render("create-blog.ejs", { title: "create blog" });
});

app.get("/about-me", (req, res) => {
  res.render("about.ejs", { title: "about-me" });
});

// route not found
app.use((req, res) => {
  res.render("404.ejs", { title: "404" });
});
