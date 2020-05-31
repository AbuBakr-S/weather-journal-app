// Build dynamic URL query by joining variables
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&appid=6d0e16cb765e5e669c1e507ac7107a09';


// Setup async GET request
const getWeather = async (baseURL, city, apiKey) => {

    const res = await fetch(baseURL+city+apiKey);
        try {
        const data = await res.json();
        console.log(data);
        return data;
        }  catch(error) {
        console.log("error", error);
        // Appropriately handle the error
        }

};


// Anticipate location (zip / postcode) as user response
const performAction = (e) => {
    // User response: Post code
    const city =  document.getElementById('city').value;      // Will fail if empty
    getWeather(baseURL, city, apiKey);    
};


// Add event listener
document.getElementById('generate').addEventListener('click', performAction);