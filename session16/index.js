var element= document.getElementById('btn');
element.addEventListener("submit", myFunction);
var users=[];
function myFunction()
{
    var em=document.getElementById('email').value
    var pass=document.getElementById('pass').value
    var obj={em,pass};
  users.push(obj);

}
console.log(users);