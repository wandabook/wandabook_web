import axios from "axios";

const userId = import.meta.env.VITE_LIBIB_API_KEY_USER;
const apiKey = import.meta.env.VITE_LIBIB_API_KEY;

export const createUser = (data) => {

    const baseUrl = 'https://api.libib.com/patrons';

    (async () => {
        try {
            const response = await axios.post(`${baseUrl}?${(new URLSearchParams(data)).toString()}`, {
                headers: {
                    'x-api-key': apiKey,
                    'x-api-user': userId,
                },
                crossdomain: true,
                timeout: 15000 // Set a 15-second timeout (adjustable)
            });

            console.log('API Response:', response.data); // Access the response data
        } catch (error) {
            console.error('Error:', error.message || error);
        }
    })();
}