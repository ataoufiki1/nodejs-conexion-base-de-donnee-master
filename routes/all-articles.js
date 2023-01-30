const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");

const articleController = require('../controller/articleController')


router.get("/", articleController.article_index_get);


router.get("/:id", (req, res) => {
  
  Article.findByIdAndDelete(req.params.id)
    .then((params) => {
           res.redirect("/all-articles");
    })
    .catch((err) => {
      console.log(err);
    });
});


//inserer les les donné de formulaire a la base de donné
router.post("/", (req, res) => {
  const article = new Article(req.body);

   console.log(article)

  article
    .save()
    .then((result) => {
      res.redirect("/all-articles");
    })
    .catch((err) => {
      console.log(err);
    });
});



module.exports = router