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
    getWeather(baseURL, city, apiKey)
    .then(function(data){
        postData('/addWeather', {temperature: data.temperature, date: data.date, userResponse: city});
    });
};


// Add event listener
document.getElementById('generate').addEventListener('click', performAction);


// Setup Async POST request
const postData = async ( url = '', data = {})=>{
    //console.log(data);
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error){
        console.log("error", error);
        // Appropriately handle the error
    }
};