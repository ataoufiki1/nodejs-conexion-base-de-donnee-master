const Article = require("../models/articleSchema");



const article_index_get= (req, res) => {
 
//start chercher les produit pour affiche le a la page index
 //result = array of object de base de donnéé
    Article.find()
     .then((result) => {
    console.log(result)
    res.render("index", { mytitle: "Home" ,result:result });
  })
  .catch((err) => {
      console.log(err);
    });
  

}


module.exports = { article_index_get }