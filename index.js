// let maVariable = prompt("Quel est ton prénom?")
// alert("To11111111111114444jjjjj")

// ** Exercice 4-1 **
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
        alert("Amuse toi bien!");
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
}
 

