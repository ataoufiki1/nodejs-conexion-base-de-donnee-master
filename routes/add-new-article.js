const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");


router.get("/", (req, res) => {
  res.render("add-new-article",{mytitle : "Ajouter un Article"});
});


module.exports = router