class Employe {
    constructor(nom, prenom, salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.salaire = salaire;
    }

    calculerSalaire() {
        return this.salaire;
    }
}

class Service {
    constructor(nom) {
        this.nom = nom;
        this.elements = [];
    }

    ajouter(element) {
        this.elements.push(element);
    }

    calculerSalaire() {
        let total = 0;
        for (let element of this.elements) {
            total += element.calculerSalaire();
        }
        return total;
    }
}

// DSIN
const directeur = new Employe("RASPEY", "Cécile", 10000);
const architecte = new Employe("BECHKAR", "Bilel", 8000);

// Big Data
const chefBigData = new Employe("RANMEY", "JB", 7500);
const concepteur = new Employe("DOE", "Jane", 3500);

const bigData = new Service("Big Data");
bigData.ajouter(chefBigData);
bigData.ajouter(concepteur);

// Java Dev
const chefJavaDev = new Employe("GUINEAU", "Kevin", 7500);
const leadDev = new Employe("MARTIN", "Paul", 3500);

const javaDev = new Service("Java Dev");
javaDev.ajouter(chefJavaDev);
javaDev.ajouter(leadDev);

// DSIN
const dsin = new Service("DSIN");
dsin.ajouter(directeur);
dsin.ajouter(architecte);
dsin.ajouter(bigData);
dsin.ajouter(javaDev);

console.log("Salaire total DSIN : " + dsin.calculerSalaire() + "€");
