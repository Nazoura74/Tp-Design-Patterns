class Logger {
    static instance = null;

    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        this.niveau = "debug";
        Logger.instance = this;
    }

    getDate() {
        return new Date().toLocaleString("fr-FR");
    }

    setNiveau(niveau) {
        if (niveau == "debug" || niveau == "info" || niveau == "error") {
            this.niveau = niveau;
        }
    }

    debug(msg) {
        if (this.niveau == "debug" || this.niveau == "info" || this.niveau == "error") {
            console.log(this.getDate() + " - DEBUG - " + msg);
        }
    }

    info(msg) {
        if (this.niveau == "info" || this.niveau == "error") {
            console.log(this.getDate() + " - INFO - " + msg);
        }
    }

    error(msg) {
        if (this.niveau == "error") {
            console.log(this.getDate() + " - ERROR - " + msg);
        }
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

console.log("meme instance ? " + (logger1 === logger2));

console.log("--- Niveau DEBUG ---");
logger1.debug("app démarrée");
logger1.info("connexion ok");
logger1.error("erreur !");

console.log("--- Niveau INFO ---");
logger1.setNiveau("info");
logger1.debug("message debug");
logger1.info("message info");
logger1.error("message error");

console.log("--- Niveau ERROR ---");
logger2.setNiveau("error");
logger2.debug("message debug");
logger2.info("message info");
logger2.error("message error");
