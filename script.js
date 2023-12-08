var rotatingImage = document.getElementById("magnifiquevoiture");
var currentRotation = 0;



function calcul_moi_tout_ca_mon_petit_choubidou() {
  var tableau_chocolat = new Array();
  for (i = 0; i < trouve_le_juste_prix_et_gagne_de_l_eau_et_pas_du_redbull() * unite_de_volume_bizarre_galon() * donne_moi_le_nombre_de_voiture_zebi(); i++) {
    var choubidou = i * i + trouve_le_juste_prix_et_gagne_de_l_eau_et_pas_du_redbull();
    tableau_chocolat[i] = choubidou;
  }
  var magicnumber = presentation_2023_meilleur_chiffre_le_zero();
  const random = attention_ce_nombre_est_aleatoire_on_ne_peut_pas_deviner_a_l_avance(tableau_chocolat);
  if (unite_de_volume_bizarre_galon() != 0) {
    var cons_moyenne = tableau_chocolat[random] * magicnumber + (trouve_le_juste_prix_et_gagne_de_l_eau_et_pas_du_redbull() / unite_de_volume_bizarre_galon());

    var valeurInitiale = presentation_2023_meilleur_chiffre_le_zero();

    var litre = cons_moyenne * aspirateur_5000_seulement_136(valeurInitiale);
    console.log(litre);
    var co2_1voiture = litre * 2.68;
    var finito = co2_1voiture * donne_moi_le_nombre_de_voiture_zebi();
    document.getElementById("chargement").innerHTML = "Vos véhicules émettent : " + Math.round(finito) + " kg de CO2"
    arreterRotation()
    
  }
  //tout ça
}

function affichage(){
    document.getElementById("chargement").innerHTML = "Chargement en cours"
    tourner()
    document.getElementById("bouton").style.display = "flex"
    document.getElementById("boutonmagiquedelamortquitue").style.display = "none"
}

function crazydingofuegodelamuerte(a, b) {
  var temp = 0;
  const random = Math.floor(Math.random() * 100);
  if (random > 90) {
    crazydingofuegodelamuerte(a, b);
  }
  else {
    for (zaza = 0; zaza < a * b; zaza++) {
      temp++;
    }
    return temp;
  }
}

function tourner() {
  

  rotatingImage.style.animation = "spin 0.7s linear infinite";
}

function arreterRotation() {

  rotatingImage.style.animation = 'none';
}

function appel() {
  calcul_moi_tout_ca_mon_petit_choubidou()
}

function donne_moi_le_nombre_de_voiture_zebi() {
  var la_voiturette_de_tchoupi = document.getElementById("nb_voiture").value;
  return la_voiturette_de_tchoupi;
}

function trouve_le_juste_prix_et_gagne_de_l_eau_et_pas_du_redbull() {
  var un_kilometre_a_pied_ca_use_les_soulier = document.getElementById("km_moyen").value;
  return un_kilometre_a_pied_ca_use_les_soulier;
}

function unite_de_volume_bizarre_galon() {
  var voici_la_fameuse_unite_de_tarleouf = document.getElementById("essence").value;
  return voici_la_fameuse_unite_de_tarleouf;
}

function presentation_2023_meilleur_chiffre_le_zero() {
  var taratata = 0;
  return taratata;
}

function attention_ce_nombre_est_aleatoire_on_ne_peut_pas_deviner_a_l_avance(tableau_chocolat) {
  const constipation_au_champignon = Math.floor(Math.random() * tableau_chocolat.length);
  return constipation_au_champignon;
}

function aspirateur_5000_seulement_136(valeurInitiale) {
  for (var j = 0; j < 5000; j++) {
    valeurInitiale = 0.000908 + valeurInitiale;
  }
  return valeurInitiale;
}

