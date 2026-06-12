class PayPal {
    pay(amount) {
        return `Paiement PayPal : ${amount} €`;
    }
}

class Stripe {
    makePayment(amount) {
        return `Paiement Stripe : ${amount} €`;
    }
}

function processPayment(paymentMethod, amount) {
    console.log(paymentMethod.payer(amount));
}

class PayPalAdapter {
    constructor() {
        this.paypal = new PayPal();
    }

    payer(amount) {
        return this.paypal.pay(amount);
    }
}

class StripeAdapter {
    constructor() {
        this.stripe = new Stripe();
    }

    payer(amount) {
        return this.stripe.makePayment(amount);
    }
}

const paypal = new PayPalAdapter();
const stripe = new StripeAdapter();

processPayment(paypal, 100);
processPayment(stripe, 100);
