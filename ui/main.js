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

button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE){
        if(request.status==200){
        var ctr=request.responseText;
      var span=document.getElementById('count');
span.innerHTML=ctr.toString();  
    }
    }



    
}
request.open('GET','http://akshathas513.imad.hasura-app.io/counter',true);
request.send(null);
};