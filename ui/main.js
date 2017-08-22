

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
 var request=new XMLHttpRequest();
 request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE){
        if(request.status==200)
        alert ('Login successful');
        else if(request.status==500)
        alert('Something went wrong');
        else if(request.status==403)
        alert('Invalid credentials');
    
    }
 }
    
    
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    request.open('POST','http://akshathas513.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username,password : password}));

};

