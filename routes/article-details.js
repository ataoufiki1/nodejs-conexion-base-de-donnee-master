const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");





router.get("/:id", (req, res) => {
    // result =   object  inside mongo database
 
  Article.findById(req.params.id)
    .then((result) => {
      res.render("details", { mytitle: "ARTICLE DETAILS", result: result });
    })
    .catch((err) => {
      console.log(err);
    });
});




module.exports = router