var form= document.getElementById("userform");
var arr=[];
var button=document.addEventListener("submit",function(event)
{
        event.preventDefault();
var em=document.getElementById("email").value;
var p=document.getElementById("pass").value;
var obj=
{
   em,p
}
arr.push(obj);
console.log(arr);
form.reset();

}



)