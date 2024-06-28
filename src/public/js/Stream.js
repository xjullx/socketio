// el servicio que recive el video
const socket = io();
console.log("hola");
const img = document.getElementById("play");

    
socket.on("stream1",(image)=>{

  console.log("hola2");
  console.log(image);
  img.src= image;
  
  });