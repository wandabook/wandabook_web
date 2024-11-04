import Cinetpay, { type PaymentData } from 'cinetpay-node-sdk';
const cinetpay = new Cinetpay('', '');

export const startPayment = (paymentData: PaymentData) => {
    cinetpay
        .initiatePayment(paymentData)
        .then((response) => {
            console.log('URL de paiement :', response.data);
            // window.location.href = response.data.payment_url;
        })
        .catch((error) => {
            console.error('Erreur lors de l’initiation du paiement :', error.message);
        });
}