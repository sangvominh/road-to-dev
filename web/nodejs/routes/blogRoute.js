const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", (req, res) => {
  Blog.find()
    .then((result) => res.render("blog.ejs", { title: "All blog", blog: result }))
    .catch((err) => console.log("error in get blog", err));
});

router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blog"))
    .catch((err) => console.log("error in create blog", err));
});

router.get("/create-blog", (req, res) => {
  res.render("create-blog.ejs", { title: "create blog" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.render("blog-detail.ejs", { title: "Blog Detail", blog: result }))
    .catch((err) => console.log("error in get blog detail", err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blog" }))
    .catch((err) => console.log("error in delete blog", err));
});

module.exports = router;
