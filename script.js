// =========================
// LIVE CLOCK
// =========================

function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();

// =========================
// WEATHER DATA (30 CITIES)
// =========================

const weatherData = {
    "hyderabad": { temp: "32°C", desc: "Sunny", hum: "45%", wind: "8 km/h" },
    "chennai": { temp: "34°C", desc: "Hot", hum: "60%", wind: "10 km/h" },
    "bangalore": { temp: "28°C", desc: "Cloudy", hum: "55%", wind: "7 km/h" },
    "mumbai": { temp: "31°C", desc: "Rainy", hum: "80%", wind: "15 km/h" },
    "delhi": { temp: "36°C", desc: "Sunny", hum: "40%", wind: "9 km/h" },
    "kolkata": { temp: "33°C", desc: "Humid", hum: "75%", wind: "11 km/h" },
    "pune": { temp: "29°C", desc: "Pleasant", hum: "50%", wind: "6 km/h" },
    "visakhapatnam": { temp: "30°C", desc: "Breezy", hum: "68%", wind: "12 km/h" },
    "tirupati": { temp: "31°C", desc: "Clear Sky", hum: "52%", wind: "5 km/h" },
    "chittoor": { temp: "30°C", desc: "Sunny", hum: "48%", wind: "6 km/h" },
    "vijayawada": { temp: "33°C", desc: "Hot", hum: "58%", wind: "8 km/h" },
    "nellore": { temp: "31°C", desc: "Cloudy", hum: "65%", wind: "9 km/h" },
    "kadapa": { temp: "34°C", desc: "Sunny", hum: "42%", wind: "7 km/h" },
    "anantapur": { temp: "35°C", desc: "Dry", hum: "35%", wind: "10 km/h" },
    "kurnool": { temp: "34°C", desc: "Sunny", hum: "38%", wind: "9 km/h" },
    "goa": { temp: "29°C", desc: "Beach Weather", hum: "78%", wind: "14 km/h" },
    "kochi": { temp: "30°C", desc: "Rainy", hum: "82%", wind: "12 km/h" },
    "jaipur": { temp: "37°C", desc: "Hot", hum: "30%", wind: "8 km/h" },
    "lucknow": { temp: "35°C", desc: "Sunny", hum: "45%", wind: "7 km/h" },
    "ahmedabad": { temp: "38°C", desc: "Very Hot", hum: "28%", wind: "9 km/h" },
    "surat": { temp: "34°C", desc: "Humid", hum: "70%", wind: "11 km/h" },
    "nagpur": { temp: "36°C", desc: "Sunny", hum: "40%", wind: "8 km/h" },
    "indore": { temp: "32°C", desc: "Clear", hum: "48%", wind: "6 km/h" },
    "bhopal": { temp: "31°C", desc: "Cloudy", hum: "52%", wind: "7 km/h" },
    "patna": { temp: "34°C", desc: "Sunny", hum: "58%", wind: "8 km/h" },
    "varanasi": { temp: "35°C", desc: "Warm", hum: "50%", wind: "6 km/h" },
    "shimla": { temp: "18°C", desc: "Cool", hum: "65%", wind: "5 km/h" },
    "manali": { temp: "16°C", desc: "Cold", hum: "70%", wind: "4 km/h" },
    "ooty": { temp: "20°C", desc: "Foggy", hum: "75%", wind: "5 km/h" },
    "mysore": { temp: "27°C", desc: "Pleasant", hum: "55%", wind: "6 km/h" }
};

// =========================
// SEARCH WEATHER
// =========================

function getWeather() {

    const city =
        document.getElementById("cityInput")
        .value
        .toLowerCase()
        .trim();

    if (!weatherData[city]) {

        alert("City not found. Try Hyderabad, Chennai, Bangalore, Mumbai or Delhi.");

        return;
    }

    const data = weatherData[city];

    document.getElementById("cityName").innerHTML =
        city.toUpperCase();

    document.getElementById("temperature").innerHTML =
        data.temp;

    document.getElementById("description").innerHTML =
        data.desc;

    document.getElementById("humidity").innerHTML =
        data.hum;

    document.getElementById("wind").innerHTML =
        data.wind;
}

// =========================
// DARK MODE
// =========================

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// =========================
// WORKING BUTTONS
// =========================

function showMessage(msg) {

    if (msg === "Dashboard Opened") {

        document.getElementById("cityInput").value = "Hyderabad";
        getWeather();

        alert("Dashboard Loaded Successfully");
    }

    if (msg === "Forecast Loaded") {

        const cards = document.querySelectorAll(".forecast-card");

        cards[0].innerHTML = "<h3>Mon</h3><p>30°C Sunny</p>";
        cards[1].innerHTML = "<h3>Tue</h3><p>31°C Cloudy</p>";
        cards[2].innerHTML = "<h3>Wed</h3><p>29°C Rainy</p>";
        cards[3].innerHTML = "<h3>Thu</h3><p>33°C Sunny</p>";
        cards[4].innerHTML = "<h3>Fri</h3><p>28°C Windy</p>";

        alert("5-Day Forecast Updated");
    }

    if (msg === "Weather Alerts") {

        alert("⚠ Heat Wave Alert\nTemperature may reach 38°C tomorrow.");
    }
}

// =========================
// ENTER KEY SEARCH
// =========================

document
.getElementById("cityInput")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        getWeather();
    }

});

// =========================
// DEFAULT LOAD
// =========================

window.onload = () => {

    document.getElementById("cityInput").value =
        "Hyderabad";

    getWeather();
};