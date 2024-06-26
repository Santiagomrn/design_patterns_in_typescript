import { CurrentConditionsDisplay } from "./classes/CurrentConditionsDisplay";
import { ForecastDisplay } from "./classes/ForecastDisplay";
import { StatisticsDisplay } from "./classes/StatisticsDisplay";
import { WeatherData } from "./classes/WeatherData";

class WeatherStation {
    public main() {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay(
            weatherData
        );

        const statisticsDisplay = new StatisticsDisplay(weatherData);
        const forecastDisplay = new ForecastDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);
        weatherData.setMeasurements(82, 70, 29.2);
        weatherData.setMeasurements(78, 90, 29.2);
    }
}

new WeatherStation().main();
