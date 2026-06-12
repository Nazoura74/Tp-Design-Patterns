class ObjetConnecte {
  constructor(limiteVolts) {
    this.limiteVolts = limiteVolts;
  }
}

class TelephonePortable extends ObjetConnecte {}

class Tablette extends ObjetConnecte {}

class EnceinteConnectee extends ObjetConnecte {}

function creerObjetConnecte(type, limiteVolts) {
  switch (type) {
    case "telephone":
      return new TelephonePortable(limiteVolts);
    case "tablette":
      return new Tablette(limiteVolts);
    case "enceinte":
      return new EnceinteConnectee(limiteVolts);
    default:
      throw new Error(`Type inconnu : ${type}`);
  }
}

const tel = creerObjetConnecte("telephone", 5);
const tab = creerObjetConnecte("tablette", 12);
const enc = creerObjetConnecte("enceinte", 9);

console.log(tel);
console.log(tab);
console.log(enc);
