// let taille = document.getElementById("taille");
// let inp = document.getElementById("inp");
// let show = document.getElementById("show");
// let valider = document.getElementById("valider");
// let trier = document.getElementById("trier");

// valider.onclick = function(){
//     for (let i = 0; i < taille.value; i++) {
//          let x = document.createElement("input");
// x.setAttribute("type","number");
// x.setAttribute("id","num"+i);
// inp.appendChild(x);
// trier.onclick = function(){

//     show.innerHTML = inp.innerHTML ;
// }
//     }
// }

// var taille  = 5 ;
// const array = [12,6,11,55,1];
// const array2 =[];

// for (let i = 0; i < array.length; i++) {
// var min = Math.min(...array);
// array2.push(min)
// console.log(array2);
// }
function validerSort(){
    var taille = parseInt(document.getElementById('taille').value)
    for(x=1 ; x<= taille ;x++){
        var inp = document.createElement('INPUT')
        inp.setAttribute('id', 'input'+x)
        inp.setAttribute('type', 'Number')
        document.getElementById('inputs').appendChild(inp)
    }
    }
    
    function sort(){
    var taille = parseInt(document.getElementById('taille').value)
    for(x=0 ; x< taille ;x++){
        var sortInp = document.createElement('INPUT')
        sortInp.setAttribute('id', 'sortInp'+x)
        document.getElementById('sortInputs').appendChild(sortInp)
    }
    const array = []
    const array2 = []
    for (let i = 1; i <= taille; i++) {
        array.push(parseInt(document.getElementById('input'+i).value))
    }
    for (let i = 0; i < taille; i++) {
        let min = Math.min(...array)
        const index = array.indexOf(min);
        array2.push(min)
        document.getElementById('sortInp'+i).value = min
        array.splice(index,1)
    }
    }