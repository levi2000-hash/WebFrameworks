window.onclick = function(event) {
    if(!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 

geselecteerde_kleur = ""
geselecteerde_auto = ""
function writeMessage(auto){
    kleuren = ['blauw','rood','zwart']
    const kleur = kleuren[Math.floor(Math.random() * kleuren.length)];
    geselecteerde_kleur = kleur;
    if(auto != geselecteerde_auto){
        msg = "Je hebt een " + auto + " met de kleur " + kleur + " gekozen.";
        document.getElementById('message').innerHTML = msg
        document.getElementById('auto').innerHTML = auto;
        document.getElementById('kleur').innerHTML = kleur;
        geselecteerde_auto = auto;
    }
    setTimeout(fade_out,2000);
}
function veranderKleur(kleur){
    updatedMsg = "Je hebt de kleur veranderd naar " + kleur
    if(kleur != geselecteerde_kleur){
        document.getElementById('message').innerHTML = updatedMsg
        document.getElementById('kleur').innerHTML = kleur;
        geselecteerde_kleur = kleur;
    }
    setTimeout(fade_out,3000);
}

function fade_out() {
  document.getElementById('message').innerHTML = ""
}