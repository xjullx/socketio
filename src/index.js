//este es mi server para trasmitir video
process.env.DEBUG = "*";
const express= require("express");
const { createServer} = require("http");
const path = require("path");
const realtimeServer = require("./realtimeServer")
const cookieParser=require("cookie-parser");


const app = express();
const httpServer=createServer(app);

//setting express
app.set("port", process.env.PORT || 3000 );
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser()); 

//Routes
app.use (require("./routes"));

// public
app.use( express.static(path.join(__dirname, "public")));


//start server express

httpServer.listen(app.get("port"),()=>{
  console.log("El servidor esta corriendo en el puerto", app.get("port"));

});

// llamar al servidor de socket.io

realtimeServer(httpServer);

