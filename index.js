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


// Exemple de la vidéo sur JS ----------------------------------
/*
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
});*/

// Exercice 6 : Chifoumi 

/*
  function comparer(choix1, choix2) {
  if (choix1 === choix2) {
    return "égalité";
  }
    switch (choix1) {
    case "pierre":
      return choix2 === "ciseaux" ? "ordi" : "joueur";
    case "feuille":
      return choix2 === "pierre" ? "ordi" : "joueur";
    case "ciseaux":
      return choix2 === "feuille" ? "ordi" : "joueur";
    default:
      throw new Error("Choix invalide.");
    }
}

function chifoumi(){
  let scoreOrdi = 0;
  let scoreUtilisateur =0;


    while(scoreOrdi !=3 && scoreUtilisateur !=3){

    let choix1 = Math.random() < 0.33? "ciseaux" : Math.random() < 0.66 ? "pierre" : "feuille";
    let choix2 = prompt("Choisissez pierre, feuille ou ciseaux:").toLowerCase()

    
    if(comparer(choix1, choix2) === "ordi"){
      scoreOrdi +=  1;
      alert("l'ordinateur marque cette manche en jouant " + choix1+ " contre "+choix2+ " pour le joueur !")
    }else if (comparer(choix1, choix2) === "joueur"){
      scoreUtilisateur +=1;
      alert("le joueur marque cette manche en jouant " + choix1+ " contre "+choix2+ " pour l'ordinateur !")
    }else{
        alert("Égalité! personne ne gagne!")
      }

 }
  return "Le score finale est de : " + scoreOrdi+ " pour l'ordinateur et de : "+ scoreUtilisateur+ " pour l'utilisateur !"

  }
alert(chifoumi())*/

//--------------------EXERCICE 7-------------------------
/*let jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
// Retire le dernier element du tableau 
jours.pop()
console.log(jours)
//Afficher les valeurs du tableau dans la console
console.log(jours)
// ajouter la valeur 'dim' à la fin du tableau
jours.push('dim')
console.log(jours)
// Remplacer '007' par 'mar'
jours[1] = 'mar'
console.log(jours)
//Afficher le nombre de valeurs du tableau dans la console
console.log(jours.length)
// afficher la troisième valeur du tableau dans la console
console.log(jours[2])
// Quelle est la valeur finale du tableau, après avoir effectué toutes ces opérations ?
[ 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ]*/

//-------------------------------Épicerie------------------------
/*let fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi']

alert("Voici les fruits disponible: "+ fruits)
let fruitChoisis = prompt("Quel fruit désiriez-vous acheter ?")
fruits.indexOf(fruitChoisis) >=0 ? fruits.splice(fruits.indexOf(fruitChoisis), 1) : alert("Indisponible")
alert("Voici les fruits disponible: "+ fruits)*/

//--------------------------------Jeu du pendu-------------------
// var mauvaisesLettres = [ ];
// var lettresAttendues = [ 's', 'u', 'p', 'e', 'r' ];
// let lettresTrouvees = "";

// while(mauvaisesLettres.length < 10 && lettresAttendues.length >0){
//   alert('Lettres à trouver pour le pendu : ' + lettresAttendues.length + '\nLettres déjà trouvées : ' + lettresTrouvees+ '\nTentatives restante : '+(10 - mauvaisesLettres.length));
//   let lettrePropose = prompt("Proposez une lettre").toLowerCase();
  

//   if(lettresAttendues.indexOf(lettrePropose) != -1){
//     alert("Bonne lettre !");
//     while(lettresAttendues.indexOf(lettrePropose) !== -1){
//       let index = lettresAttendues.indexOf(lettrePropose);
//       lettresAttendues.splice(index, 1);
//       lettresTrouvees += lettrePropose;
//     }
//   }else{
//     alert("Mauvaise lettre !")
//     mauvaisesLettres.push(lettrePropose)
//     console.log(mauvaisesLettres , lettresAttendues);
    
//   }
// }
// console.log("test3");

// if(mauvaisesLettres.length === 10){
//   alert('Perdu ! Le mot était : ' + lettresAttendues.join(''));
// }else{
//   alert('Gagné ! le mot était' +lettresTrouvees)
// }

// let m=[],a=['s','u','p','e','r'],t="";
// while(m.length<10&&a.length){
//   let l=prompt(`Lettres à trouver: ${a.length}\nTrouvées: ${t}\nTentatives: ${10-m.length}`).toLowerCase();
//   a.includes(l)?(t+=l,a=a.filter(x=>x!=l),alert("Bonne lettre !")):(m.push(l),alert("Mauvaise lettre !"));
// }
// alert((m.length==10?"Perdu ! Le mot était : super":"Gagné ! le mot était "+t));


/*
  lettresAttendues.indexOf(lettrePropose) >=0 ? lettresAttendues.splice(lettresAttendues.indexOf(lettrePropose),1) : mauvaisesLettres.splice(mauvaisesLettres.length,0,lettrePropose)
  console.log(lettresAttendues, mauvaisesLettres);
  mauvaisesLettres.length ===10? alert("perdu") : lettresAttendues.length === 0 ? alert("bravo"): null;

}  */
//-------------------------------Exo 8--------------------
var annuaire = {
  patricia: '06 66 66 66 66',
  david: '07 77 77 77 77',
};



// alert(annuaire[nomAmi])

// for(nomAmi in annuaire){
//   alert(nomAmi + ' : ' + annuaire[nomAmi])
// }

function ajouter(nom, tel){

  return annuaire[nom] = tel;
   
}

// function s(nom){
// if(nom in annuaire){
// return delete annuaire[nom]
// }else{
//   return "Le nom saisie n'est pas présent dans l'annuaire..."
// }
// }
let choix = prompt("Voulez-vous ajouter(a) / supprimer (s) / rechercher(r) ou afficher la liste(l) ? (q) pour quitter").toLowerCase(); 
switch(choix){
  case "a" :
    let nomAmi = prompt('Nom de votre ami ? (patricia ou david)').toLowerCase();
    let telAmi = prompt('Tel de votre ami ?').toLowerCase();
    ajouter(nomAmi, telAmi);
    console.log(annuaire)
}





