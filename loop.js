var num = 8;
var count=0;
for (count = 1; count <= 10; count = count + 1)
{
    console.log(count +"*" + num +"="+num*count);
}
function display()
{
    var number=document.getElementById("num").value;
    var count=0;
var text="";
for (count = 1; count <=10; count = count + 1) {
    text =text + count + " * " + number + " = " + number*count + "<br>";
}
document.getElementById("output").innerHTML = text;
}