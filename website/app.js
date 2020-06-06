// Build dynamic URL query by joining variables
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = ',gb&units=metric&appid=6d0e16cb765e5e669c1e507ac7107a09';

// Setup async GET request
const getWeather = async (baseURL, postCode, apiKey) => {

    const res = await fetch(baseURL+postCode+apiKey);
    
    try {
        const data = await res.json();
        //console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
        // Appropriately handle the error
    }
};

// Anticipate location (zip / postcode) as user response
const performAction = (e) => {
    // User response: Post code
    let postCode =  document.getElementById('postCode').value;      // Will fail if empty
    // User response: Feeling
    let feeling = document.getElementById('feelings').value;

    // Date
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    getWeather(baseURL, postCode, apiKey)
    .then(function(data){
        console.log(data);
        postData('/', {temperature: data.main.temp, date: newDate, userResponse: feeling});
    });
};

// Add event listener
document.getElementById('generate').addEventListener('click', performAction);




// Setup Async POST request
const postData = async ( url = '', data = {})=>{
    //console.log(`Display: ${data}`);
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
        //console.log(`Print: ${newData}`);
        return newData;
    }catch(error){
        console.log("error", error);
        // Appropriately handle the error
    }
};