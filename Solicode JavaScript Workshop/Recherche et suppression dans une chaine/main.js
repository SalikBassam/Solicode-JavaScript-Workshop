let search = document.getElementById("search");
let remove = document.getElementById("delete");
let phrase = document.getElementById("phrase");
let word = document.getElementById("word");
let spot = document.getElementById("spot");
let answ = document.getElementById("answ");

search.onclick = function(){
   
   spot.innerHTML = phrase.value;
   if ( phrase.value.includes(word.value)) {
      answ.innerHTML="This word is existing";
      if(phrase.value === "" || word.value === ""){
         answ.innerHTML="Empty value !!";
      }
}else{
   answ.innerHTML="Undefined";
}
}
remove.onclick = function(){
   if ( phrase.value.includes(word.value)){
      spot.innerHTML= phrase.value.replace(word.value, "");
      if(phrase.value === "" || word.value === ""){
         answ.innerHTML="Empty value !!";
      }
   }else{
   answ.innerHTML="Undefined";
   }
}