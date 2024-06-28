//cliente
const socket = io();

//se leen los componentes de dom
var canvas = document.querySelector("#preview");
var context = canvas.getContext("2d");
var btn = document.querySelector("#btn");
var video = document.querySelector("#Video");
//el canvas para imprimir el video
canvas.width=512;
canvas.height=384;
canvas.style.display="none";
context.width=canvas.width;
context.height=canvas.height;

//se crean unas funciones 
const LoadCam= (stream)=> {
  video.srcObject = stream;
  console.log("funcion cargar camara")

}

const cameraError=()=>{ 
  console.log("error camera");
}

const VerVideo=(video,context)=>{
    context.drawImage(video, 0, 0, context.width, context.height);
    socket.emit("stream",canvas.toDataURL("image/webp"));
    //console.log(canvas.toDataURL("image/webp"));

}


btn.addEventListener("click",()=>{

  console.log("click");

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  console.log(navigator.getUserMedia);

  
  if(navigator.getUserMedia){//solicito camara
    console.log("click3");
    navigator.getUserMedia({video:true},LoadCam,cameraError)
  }
  
  console.log("click4");
  var interval = setInterval(()=>{
    VerVideo(video, context);
  },100);
  
  
});


 