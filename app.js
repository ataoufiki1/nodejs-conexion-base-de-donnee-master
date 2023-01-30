//  to controll ur website

const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));


const allArticlesRouter = require('./routes/all-articles')
const articleDetail = require('./routes/article-details')
const add_new_article =require('./routes/add-new-article')
app.use(express.urlencoded({ extended: true }));


// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/blog"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });




  ////////////////////////////
app.get("/", (req, res) => {
  res.redirect("/all-articles");
});




/////start essay moi meme


//-articles PATH

app.use('/all-articles',allArticlesRouter)
 // detaoil article PATH
 
app.use('/article-details',articleDetail)

////
app.use('/add-new-article',add_new_article)
/////////end enregistrement dans la base de donne


//  404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});
