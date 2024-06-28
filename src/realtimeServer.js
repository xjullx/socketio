//soket io modulo se conecta con el front y el server 
module.exports = httpServer => {
    
    // se crea l websocket
    
    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    console.log("Hi in socket ");
    

    io.on("connection", socket =>{
    
      const cookie = socket.handshake.headers.cookie;
      const user = cookie.split("=").pop();
      console.log("welcome" + user);
      
      socket.on("stream", image =>{
        console.log("westoy escuchandooooooooooooooooooooo");  
        io.emit("stream1", image);
        });
      });
}

