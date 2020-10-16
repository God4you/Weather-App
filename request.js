const key = '5185b0867cbe24863b9f209695456861'

const requestCity = async city => {
    const baseURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    //make fetch call 
    const fetchResponse = await fetch(baseURL);

    //promise data
    const data = await fetchResponse.json();
    return data
}
