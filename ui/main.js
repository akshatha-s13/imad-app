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
    var interval=setInterval(moveRight,50);
   // img.style.marginLeft='100px';
}

var button=document.getElementById('counter');
var ctr=0;
button.onclick=function(){
ctr++;
var span=document.getElementById('count');
span.innerHTML=ctr.toString();

    
}