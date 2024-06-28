//estas son mis rutas
const express= require("express");
const router = express.Router();
const path = require("path");
const cookieParse=require("cookie-parser");

const views = path.join(__dirname, "/../views");

const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", isLoggedIn,(req, res) =>{

  res.sendFile(views + "/index.html");

});

router.get("/register", (req, res) =>{

  res.sendFile(views + "/register.html");

});


router.get("/VerStream", (req, res) =>{

  res.sendFile(views + "/ver.html");

});

module.exports = router;