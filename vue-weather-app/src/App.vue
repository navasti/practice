<template>
  <div id="app" :class="weather.main && weather.main.temp > 16 ? 'warm' : ''">
    <main @click="dateBuilder">
      <div class="search-box">
        <input
          type="text"
          v-model="query"
          class="search-bar"
          @keypress="fetchWeather"
          placeholder="Type your location..."
        />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: process.env.VUE_APP_WEATHER_KEY,
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
        const url = `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        this.setResults(data);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      const currentDate = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const day = days[currentDate.getDay()];
      const date = currentDate.getDate();
      const month = months[currentDate.getMonth()];
      const year = currentDate.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,300;1,700;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  font-family: "Poppins", sans-serif;
}

#app {
  background-image: url("./assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url("./assets/warm-bg.jpg");
}

main {
  min-height: 100vh;
  padding: 2.5rem;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.search-box {
  width: 100%;
  margin-bottom: 3rem;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 1.5rem;

  color: #313131;
  font-size: 2rem;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 1.2rem 0 1.2rem;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 1.2rem 0 1.2rem 0;
}

.location-box .location {
  color: #fff;
  font-size: 3.2rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 0.1rem 0.3rem rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 1rem 2.5rem;
  color: #fff;
  font-size: 9.8rem;
  font-weight: 900;

  text-shadow: 0.3rem 0.6rem rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 1.6rem;
  margin: 3rem 0;

  box-shadow: 0.3rem 0.6rem rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #fff;
  font-size: 4.8rem;
  font-weight: 700;
  font-style: italic;
  text-shadow: 0.3rem 0.6rem rgba(0, 0, 0, 0.25);
}
</style>
