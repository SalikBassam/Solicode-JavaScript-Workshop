num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
od = document.getElementById("od");

od.onclick=function(){
    temp = num1.value
num1.value = num2.value
num2.value = temp
}
