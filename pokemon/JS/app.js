class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        //let random = Math.random()
        //return random <= this.luck
        return Math.random() <= this.luck;
    }

    attackPokemon(ennemy){
        if (this.isLucky()) {
            let degats = this.attack - ennemy.defense;
            if (degats > 0){
                ennemy.hp -= degats;
            }
            console.log(this.name + " attaque " + ennemy.name + " et lui inflige " + degats + " de dégâts.");
            console.log(ennemy.name + " a maintenant " + ennemy.hp + " HP.");
        } else {
            console.log("Pas de chance ! " + this.name + " a raté son attaque contre " + ennemy.name + ".!");
        }
    }
}

let magicarpe = new Pokemon("Magicarpe", 40, 20, 120, 0.8);
let mewtwo = new Pokemon("Mewtwo Shiny", 35, 25, 140, 0.7);

while (magicarpe.hp > 0 && mewtwo.hp > 0) {
    magicarpe.attackPokemon(mewtwo);
    console.log(mewtwo.name +" a " + mewtwo.hp + " HP restants.");
    
    if (mewtwo.hp <= 0) {
        console.log(mewtwo.name + " est KO. " + magicarpe.name + " a gagné ! Youpi !!!");
        break;
    }

    mewtwo.attackPokemon(magicarpe);
    console.log(magicarpe.name + " a " + magicarpe.hp + " HP restants.");

    if (magicarpe.hp <= 0) {
        console.log(magicarpe.name + " est KO. " + mewtwo.name + " a gagné. BOUUUUUHHH !!!");
        break;
    }
}

