
const userId = import.meta.env.VITE_LIBIB_API_KEY_USER;
const apiKey = import.meta.env.VITE_LIBIB_API_KEY;


export const createUser = (data: any) => {
    const baseUrl = 'https://api.libib.com/patrons';
    const url = `${baseUrl}?${(new URLSearchParams(data)).toString()}`


    const xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("x-api-key", "YOUR_API_KEY");
    xhr.setRequestHeader("x-api-user", "YOUR_API_USER");

    xhr.onload = function () {
        if (xhr.status === 200) { // Check for successful response
            try {
                const response = JSON.parse(xhr.responseText);
                // Process the response data here (e.g., display it, manipulate it)
                console.log(response);
            } catch (error) {
                console.error("Error parsing JSON response:", error);
            }
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    };

    xhr.onerror
        = function (error) {
            console.error("Request failed:", error.AT_TARGET);
        };

    xhr.send();
}