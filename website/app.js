// Build dynamic URL query by joining variables
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = '&appid=6d0e16cb765e5e669c1e507ac7107a09';

/*
Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6d0e16cb765e5e669c1e507ac7107a09
*/

// Setup async GET request
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

};

// Setup Async POST request
const postData = async ( url = '', data = {})=>{
    console.log(data);
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
    }
};


// Anticipate location (zip / postcode) as user response
const performAction = (e) => {
    // User response: Post code
    const zip =  document.getElementById('zip').value;      // Will fail if empty
    getWeather(baseURL, zip, apiKey);    
};

// Add event listener
document.getElementById('generate').addEventListener('click', performAction);

// POST Data
postData('/', {temperature: 24, date: 300520, userResponse: 'e97al'});
postData('/', {temperature: 36, date: 300520, userResponse: 'n167ux'});
