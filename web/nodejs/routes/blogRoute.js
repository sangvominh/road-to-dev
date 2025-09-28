const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);
router.get("/create-blog", blogController.blog_create_get);
router.get("/:id", blogController.blog_detail);
router.delete("/:id", blogController.blog_delete);
module.exports = router;