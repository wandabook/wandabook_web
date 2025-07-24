import axios from 'axios';

export const callCheckPayment = async (transactionId: string, siteId = import.meta.env.VITE_APP_CINET_PAY_SITE_Id) => {
    const url = `${import.meta.env.VITE_APP_NOTIFICATION}}/checkPayment`; // Replace with your actual endpoint URL

    const payload = {
        cpm_trans_id: transactionId,
        cpm_site_id: siteId
    };

    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Success:', response.data);
    } catch (error) {
        console.log('Error:', error);
    }
};

// --- Example usage ---
const myTransactionId = 'TRANS_123456';
const mySiteId = 'SITE_ABCDEF';

callCheckPayment(myTransactionId, mySiteId);