
send = document.getElementById("send");

var random = Math.floor(Math.random() * 50 + 1);
console.log(random);

i = 9;

send.onclick = function () {
    console.log(random);
    tries = document.getElementById("tries");
    count = document.getElementById("count");
    num = document.getElementById("num").value;

    if (num <= 50 && num >= 1 && i >= 1) {
        while (num != random) {
            tries.innerHTML = `try again`;
            count.innerHTML = `Tentatives restantes :${i}/10`;
            i--
            break
        }
    }
    if (num == random) {
        tries.innerHTML = "Nice guess";
        count.innerHTML = `Tentatives restantes : Congrats`;

    } else if (num == "" || num == 0) {
        tries.innerHTML = "there is no number";
        count.innerHTML = `please shoose a number between 1 / 50`;
    }
    if (i == 0) {
        tries.innerHTML = "Unluky   try Again ";
        count.innerHTML = `Tentatives restantes : no tries left the number was ${random}`;
    }

}










// send.onclick = function(){
//     count.innerHTML=`Tentatives restantes :${i}/10`;
//     i-- ;
//     console.log(i);
// if (i < 0) {
//     count.innerHTML=`Tentatives restantes : Game over`;
// }
//    if(num === random){
//     tries.innerHTML="Nice guess";
//     count.innerHTML=`Tentatives restantes : Congrats`;

// }else if(num.value === ""){
//     tries.innerHTML="there is no number";
// }else if(+num.value !== random){
//     tries.innerHTML= "Try again!";
// }
//}