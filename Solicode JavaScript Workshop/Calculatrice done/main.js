num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiply = document.getElementById("multiply");
division = document.getElementById("division");
result = document.getElementById("result");
plus.onclick = function(){
result.value =Number(num1.value) + Number(num2.value)
}
minus.onclick = function(){
    result.value =Number(num1.value) - Number(num2.value)
    }
    multiply.onclick = function(){
        result.value =Number(num1.value) * Number(num2.value)
        }
        division.onclick = function(){
            result.value =Number(num1.value) / Number(num2.value)
            }