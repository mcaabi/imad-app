console.log('Loaded!');
//change the value
var element=document.getElementById("text");
element.innerHTML="new value";

//move the img
var img=document.getElementById('modi')
var marginLeft=0;
function moveRight () {
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function (){
    var interval=setInterval(moveRight,100);
  img.style.marginleft='100px';  

};