const btn = document.querySelector("button");
const form = document.querySelector("form");
const city = document.querySelector("#city");
const temp = document.querySelector(".temp");
const search = document.querySelector("#search");
const main = document.querySelector(".main")

const key = `f096662efbdf0b345a31cdcec630ce57`;



const clearDetails = () => {


    city.innerHTML = "";
    temp.innerHTML = "";
}

const getData = async (locatioin) => {
    clearDetails();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locatioin}&appid=${key}&units=metric`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                city.innerHTML = `<h4 id="city">City not found, Please enter a new city</h4>`;
            } else {
                throw new Error("Error aa gya bhai");
            }
        } else {
            const data = await response.json();
            updateWeather(data);
        }
    } catch (error) {
        console.error(error);
    }
}

const updateWeather = (data) => {

    const temperature = data.main.temp;
    const weatherIcon = data.weather[0].icon;
    const cityName = data.name;


    temp.innerHTML = `<h3 id="temp">${temperature}</h3>
                      <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="icon">`;
    city.innerHTML = `<h4 id="city">City: ${cityName}</h4>`
}

btn.addEventListener("click", (e) => {
    getData(search.value);
    e.preventDefault();
});


