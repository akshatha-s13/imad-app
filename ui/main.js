console.log('Loaded!');
var element=document.getElementById('main-text')

element

element.innerHTML='akkkkshhu';
var img=document.getElementById('madi');
marginLeft=0;
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
   // img.style.marginLeft='100px';
}