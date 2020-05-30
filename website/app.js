// Build dynamic URL query by joining variables
let baseURL = 'api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&APPID=6d0e16cb765e5e669c1e507ac7107a09';

/*
Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6d0e16cb765e5e669c1e507ac7107a09
*/

// Add event listener
document.getElementById('generate').addEventListener('click', performAction);

// Anticipate location (zip / postcode) as user response
const performAction = (e) => {
    const zip =  document.getElementById('zip').value;
    getWeather(baseURL, zip, apiKey);    
}

const getWeather = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+key);
        try {
        const data = await res.json();
        console.log(data);
        return data;
        }  catch(error) {
        console.log("error", error);
        // Appropriately handle the error
        }

}


    