
  <body>
    <div class="container">
      <div id="nearest-weather">
        <!-- icon -->
        <img src="https://api.weather.gov/icons/land/night/few?size=medium" alt="Tonight forecast icon">
        <div  class="left-ctr">
          <h2>Wind:</h2>
          <!-- windSpeed windDirection -->
          <p>5 to 10 mph NW</p>
        </div>
        <div>
          <!-- name -->
          <h2>Tonight</h2>
          <!-- temperature temperatureUnit -->
          <p><span class="degrees">59</span> F</p>
          <!-- shortForecast ("Sunny") -->
          <p>Mostly Clear</p>
        </div>
        <!-- "detailedForecast"  -->
        <p class="left-ctr">"Mostly clear, with a low around 59. Northwest wind 5 to 10 mph."</p>
      </div>
      <div id="forecast-container">
        <div class="forecast-tile">
          <div>
            <!-- name -->
            <h2>Wednesday</h2>
            <!-- temperature temperatureUnit -->
            <p><span class="degrees">80</span> F</p>
            <!-- shortForecast ("Sunny") -->
            <p>Sunny</p>
          </div>
          <div>
            <h2>Wind:</h2>
            <!-- windSpeed windDirection -->
            <p>5 to 10 mph NW</p>
          </div>
          <!-- icon -->
          <img src="https://api.weather.gov/icons/land/day/few?size=medium" alt="Wednesday forecast icon">
        </div>
      </div>
    </div>
    
    <script src="app.js"></script>
  </body>
</html>