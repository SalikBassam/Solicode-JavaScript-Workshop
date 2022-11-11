number = document.getElementById("number");
button = document.getElementById("button");
mult = document.getElementById("mult");
button.onclick = function(){
    for (let i = 1; i <= 10; i++) {
mult.innerHTML += `${number.value} * ${i} = ${number.value * i}<br>`
    }
}