function display()
{
    var number=document.getElementById("mark").value;
    var grade;
    if(number>=80 && number<=100)
    {
        grade ="you have got A+";
    }
    else if(number>=60 && number<=79)
{
    grade = "you have got B";
}
else
{
    grade = "you have failed";
}
alert(grade);
}
document.write(name);