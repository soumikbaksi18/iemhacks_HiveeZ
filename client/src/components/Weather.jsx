import React, { useState, useEffect, useCallback, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import cloudyLarge from "./images/cloudy-large.svg";
import cloudyWhite from "./images/cloudy-white.svg";
import cloudyPurpleActive from "./images/cloudy-purple-active.svg";
import keys from "../secrets.json";
// import "./App.css";

function App() {
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Pune, INDIA");
  const [chart, setChart] = useState({
    chartLabels: ["Now"],
    chartData: [],
    chartMin: "",
    chartMax: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);

  const cityInputRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    setCity(enteredCity);
  };

  const tabChangeHandler = (active) => {
    setActive(active);
    updateChart(active);
  };

  const fetchForecastHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const currentData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.key}&units=metric`
      ).then((response) => response.json());
      const forecastData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${keys.key}&units=metric`
      ).then((response) => response.json());

      const c = new Date();
      const currentTime = c.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      let time = [];
      let temp = []; // Initialize the temp array
      let transformedDays = [];
      // Rest of the data transformation logic
      // Iterate over forecastData.list and populate time and temp arrays

      setChart({
        chartLabels: time,
        chartData: temp,
        chartMin: Math.min(...temp),
        chartMax: Math.max(...temp),
      });
      
      const transformedForecast = [
        {
          name: currentData.name,
          currentTime: currentTime,
          feels_like: Math.round(currentData.main.feels_like),
          temp: Math.round(currentData.main.temp),
          humidity: Math.round(currentData.main.humidity),
          wind: Math.round(currentData.wind.speed),
          days: transformedDays,
          current: {
            chartLabels: time,
            chartData: temp,
            chartMin: Math.min(...temp),
            chartMax: Math.max(...temp),
          },
        },
      ];
      setForecast(transformedForecast);

      if (!currentData.ok || !forecastData.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [city]);

  useEffect(() => {
    fetchForecastHandler();
  }, [fetchForecastHandler]);

  const updateChart = (active) => {
    if (active !== 0) {
      // Update chart data based on active tab...
    } else {
      setChart(forecast[0].current);
    }
  };

  let content = <p>No forecast available.</p>;

  if (error) {
    content = <p>Error: {error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (forecast.length > 0) {
    content = (
      <section className="main-inner">
        <div className="left-widget">
          {/* Left widget content */}
        </div>
        <div className="right-widget">
          <div className="right-widget-inner">
            <div className="chart-container">
              {/* ForecastGraph component */}
            </div>
            <div className="forecast-tabs">
              {/* ForecastTabs component */}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="App">
      <section className="main">
        <form className="form-control" onSubmit={submitHandler}>
          <div>
            <label htmlFor="city">Enter your city</label>
            <input
              id="city"
              type="text"
              ref={cityInputRef}
              placeholder="Pune"
            />
          </div>
        </form>
        {content}
      </section>
    </div>
  );
}

export default App;
