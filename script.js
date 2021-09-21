var pelikaynnissa = false;
var panos = 0.5;
var rahaa = 50;
var randomNumero = 0;
var arpa1 = 0;
var arpa2 = 0;
var arpa3 = 0;
var maksimipanos = 10;
var minimipanos = 0.5;


//1 = banaani, 2 = omena, 3 = päärynä, 4 = vesimelooni, 5 = timantti


function pelaa() {
    if (pelikaynnissa == false && rahaa >= panos) {
        rahaa -= panos;
        pelikaynnissa = true;
        paivitaHedelma("hedelma1", "img/nothing.png");
        paivitaHedelma("hedelma2", "img/nothing.png");
        paivitaHedelma("hedelma3", "img/nothing.png");
        setTimeout(() => { arpa1 = arvohedelma("hedelma1"); }, 500);
        setTimeout(() => { arpa2 = arvohedelma("hedelma2"); }, 1000);
        setTimeout(() => { arpa3 = arvohedelma("hedelma3"); }, 1500);

        setTimeout(() => {
            
            if (arpa1 == 1 && arpa2 == 1 && arpa3 == 1) {
                alert("voitto: " + panos * 5 +"€");
                rahaa += panos * 5;
                paivitaRahat();
            }
    
            if (arpa1 == 2 && arpa2 == 2 && arpa3 == 2) {
                alert("voitto: " + panos * 5 +"€");
                rahaa += panos * 5;
                paivitaRahat();
            }
    
            if (arpa1 == 3 && arpa2 == 3 && arpa3 == 3) {
                alert("voitto: " + panos * 5 +"€");
                rahaa += panos * 5;
                paivitaRahat();
            }
    
            if (arpa1 == 4 && arpa2 == 4 && arpa3 == 4) {
                alert("voitto: " + panos * 50 + "€");
                rahaa += panos * 50;
                paivitaRahat();
            }
    
            if (arpa1 == 5 && arpa2 == 5 && arpa3 == 5) {
                alert("voitto: " + panos * 1000 +"€");
                rahaa += panos * 1000;
                paivitaRahat();
            }


        }, 1600);
      
        setTimeout(() => { pelikaynnissa = false;  paivitaKaikki();}, 2000);
        paivitaKaikki();
    }
}


function arvohedelma(id) {
    var hedelma;
    var luku = pyorita();

    if (luku == 1) {
        hedelma = paivitaHedelma(id, "img/banaani.png");
        return 1;
    }

    if (luku == 2) {
        hedelma = paivitaHedelma(id, "img/omena.png");
        return 2;
    }

    if (luku == 3) {
        hedelma = paivitaHedelma(id, "img/paaryna.png");
        return 3;
    }

    if (luku == 4) {
        hedelma = paivitaHedelma(id, "img/vesimelooni.png");
        return 4;
    }

    if (luku == 5) {
        hedelma = paivitaHedelma(id, "img/timantti.png");
        return 5;
    }
}

function paivitaHedelma(id, hedelma) {
    document.getElementById(id).src = hedelma;
}



function pyorita() {
    var arpa;
    randomNumero = arvo();

    if (randomNumero <= 10) {
        arpa = 1;
    }

    if (randomNumero > 10 && randomNumero <= 21) {
        arpa = 2;
    }

    if (randomNumero > 21 && randomNumero <= 31) {
        arpa = 3;
    }

    if (randomNumero > 31 && randomNumero <= 36) {
        arpa = 4;
    }

    if (randomNumero > 36) {
        arpa = 5;
    }

    return arpa;
}



function arvo() {
    return Math.random() * (38 - 1) + 1;

}


function paivitaKaikki() {
    paivitaRahat();
    paivitaPanos();
    paivitaHedelmat();
}

function paivitaBanaanit() {
    document.getElementById("banaanit-voitto").innerHTML = panos * 5 + "€";
}

function paivitaOmenat() {
    document.getElementById("omenat-voitto").innerHTML = panos * 5 + "€";
}

function paivitaPaarynat() {
    document.getElementById("paarynat-voitto").innerHTML = panos * 5 + "€";
}

function paivitaVesimeloonit() {
    document.getElementById("vesimeloonit-voitto").innerHTML = panos * 50 + "€";
}

function paivitaTimantit() {
    document.getElementById("timantit-voitto").innerHTML = panos * 1000 + "€";
}

function paivitaHedelmat() {
    paivitaTimantit();
    paivitaVesimeloonit();
    paivitaPaarynat(),
        paivitaOmenat();
    paivitaBanaanit();
}




function paivitaRahat() {
    document.getElementById("rahaa").innerHTML = "RAHAA: " + rahaa + "€";
}


function paivitaPanos() {
    document.getElementById("panos").innerHTML = "PANOS: " + panos + "€";
}


function vaihdaPanos() {
    
    if(rahaa < panos + 0.5){
        panos = minimipanos;
    }else{
      if (panos <= (maksimipanos - 0.5)) {
        panos += 0.5;
    }  
    }
   
    paivitaKaikki();
}