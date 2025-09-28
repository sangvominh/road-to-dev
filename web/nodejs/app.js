const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRoute");

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

app.use("/blog", blogRouter);

app.get("/about-me", (req, res) => {
  res.render("about.ejs", { title: "about-me" });
});

// route not found
app.use((req, res) => {
  res.render("404.ejs", { title: "404" });
});
