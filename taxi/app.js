class Personnage {
    constructor(prenom, santeMentale) {
        this.prenom = prenom;
        this.santeMentale = santeMentale;
    }
}

let john = new Personnage("John", 10);

class Trajet {
    constructor() {
        this.feuxRouges = 30;
        this.changement = 0;
        this.musique = ["Anissa - Wejdene", "Bohemian Rhapsody - Queen", "Beat it - Michael Jackson", "Blinding light - TheWeeknd", "Die for you - TheWeeknd"];
    }

    terminerTrajet() {
        if (john.santeMentale <= 0) {
            console.log(john.prenom + " A EXPLOSÉ !!!");
        } else {
            console.log(john.prenom + " est arrivé à destination en " + this.changement + " changements de taxi. YOUPIIII !");
        }
    }

    apresFeuRouge() {
        if (john.santeMentale <= 0) {
            this.terminerTrajet();
        } else if (this.feuxRouges > 0) {
            let musique = this.musique[Math.floor(Math.random() * this.musique.length)];
            if (musique === "Anissa - Wejdene") {
                console.log("La musique jouée est " + musique + ". Il vous reste " + john.santeMentale + " de santé mentale" + ". ATTENTION JOHN !");
                john.santeMentale--;
                this.changement++;
                this.apresFeuRouge(); 
            } else {
                this.feuxRouges--;
                console.log("La musique jouée est " + musique + ". Il reste " + this.feuxRouges + " feux rouges. COURAGE !");
                this.apresFeuRouge(); 
            }
        } else {
            this.terminerTrajet();
        }
    }
}

let trajet = new Trajet();
trajet.apresFeuRouge();
