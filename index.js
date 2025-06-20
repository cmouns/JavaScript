// let maVariable = prompt("Quel est ton prénom?")
// alert("To11111111111114444jjjjj")

/* ** Exercice 4-1 **
let premiereSaisie = "";
premiereSaisie = prompt("Ecrivez : 'Bonjour' ou 'tu vas bien?").toLowerCase();

if (premiereSaisie == "bonjour") {
  deuxiemeSaisie = prompt("bonjour ! ca va?").toLowerCase();
  if (deuxiemeSaisie === "oui") {
    troisiemeSaisie = prompt(
      "Je suis content pour toi. Il fait chaud non?"
    ).toLowerCase();
    if (troisiemeSaisie === "oui") {
      quatriemeSaisie = prompt("Tu vas aller à la plage ?");
      if (quatriemeSaisie === "oui") {
        sixiemeSaisie = prompt("T'es + bronzette ou nage?")
        if(sixiemeSaisie === "bronzette"){
          alert("Met de la creme solaire si tu ne veux pas cramer")
        }else if(sixiemeSaisie === "nage"){
          alert("Fais attention l'eau est froide !")
        }else{
          alert("Mmh tu preferes peut-etre faire des chateaux de sables....")
        }
      } else {
        alert("Tu iras une prochaine fois !");
      }
    }else{
        cinquiemeSaisie = prompt("T'es immunisé à la chaleur ou quoi?").toLowerCase();
    if (cinquiemeSaisie === "oui") {
      alert("Smehli l'ancien");
    } else {
      alert("Il ne fait pas assez chaud pour toi alors :).");
    }
    }
  } else {
  alert("Désolé mec, il faut que je file...");
}

  }else if(premiereSaisie ==="tu vas bien?"){
    saisieJspCombien=prompt("Bien, et toi?").toLowerCase();
    if(saisieJspCombien ==="bien"){
        alert("Parfait alors :)");
    }else if (saisieJspCombien==="non"){
        alert("T'iras mieux demain.. :)");
    }else{
        alert("Je n'ai pas compris, désolé....");
    }
}else{
    alert("Désolé, je n'ai pas compris....");
} */

//-------------Exercice 3--------------------------------------------------------------------

//  for(let i=1;i<200;i++){
//   if(i%3==0 && i%5==0){
//     console.log("FizzBuzz");
//     }else if(i%3==0){
//       console.log("Fizz")
//     }else if(i%5==0){
//       console.log("Buzz")
//     }else{
//       console.log(i);
//     }
    
//  }

// function conqueteAmine(a){
//   return a*100;
// }
// console.log("Amine espererai augmenter ses conquêtes de : "+"+"+conqueteAmine(2)+" meufs (au minimum)");

// --------------------EXO 4--------------------

//fonction division:

// function diviserParDeux(a){
//   return a/2;
// }
// console.log(diviserParDeux(4));

//fonction somme:

// var n= Math.random();
// function sommeNombre(a,b){
//   return a+b;
// }
// console.log(sommeNombre(n,1));

//signe aleatoire-------------------------------
// function signe(a){
//   if(a>0){
//     return 'positif'
//   }else if(a<0){
//     return "négatif"
//   }else{
//     return "nul"
//   }
// }
// console.log(signe(Math.random()))



// function factorielle(valeur){ 
// let somme = 1;
// for(let i=1; i<=valeur;i++){
//   somme *= i;
// }
// return somme;
// }
// console.log(factorielle(2))

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (r) => {
  console.log(r);
  mousemove.style.left = r.pageX + "px";
  mousemove.style.top = r.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(50%, 50%)";
});
