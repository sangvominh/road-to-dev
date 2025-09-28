const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => res.render("blog.ejs", { title: "All blog", blog: result }))
    .catch((err) => console.log("error in get blog", err));
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blog"))
    .catch((err) => console.log("error in create blog", err));
};

const blog_create_get = (req, res) => {
  res.render("create-blog.ejs", { title: "create blog" });
};

const blog_detail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => res.render("blog-detail.ejs", { title: "Blog Detail", blog: result }))
    .catch((err) => console.log("error in get blog detail", err));
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blog" }))
    .catch((err) => console.log("error in delete blog", err));
};

module.exports = {
  blog_index,
  blog_create_post,
  blog_create_get,
  blog_detail,
  blog_delete,
};
