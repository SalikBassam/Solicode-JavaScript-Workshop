function generate() {
    var input1 = document.getElementById("limit").value;
    var result = document.getElementById("result");
    result.innerHTML = "";

    const l = input1;
    let space = " ";
    let star = "*";
    let i = 1;
    let k;
    let n = 0;
if (l % 2 !=0) {
  

    while (i <= l) {
      k = (l - i) / 2;
      result.innerHTML += ` ${space.repeat(k)} ${star.repeat(i)} <br>`;
      result.style.textAlign = "center";
      i = i + 2;
    }


    while (i >= 2) {
      i = i - 2;
      k = (l - i) / 2;
      if (i < l) {
        // To get rid of repeating middle line
        result.innerHTML += ` ${space.repeat(k)} ${star.repeat(i)} <br>`;
      } else {
        continue;
      }
    }
  }else{
    result.innerHTML="Error 404"
  }
}


