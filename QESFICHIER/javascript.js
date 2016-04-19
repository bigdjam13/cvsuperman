function afficher(etat)
{
	document.getElementById("champs").style.visibility=etat;
}
function changebg(champs) {
   var e = document.getElementById(champs);

   if(e) {
      e.style.backgroundColor='#ffffff';
      e.style.fontcolor='#000000';
   }
}
