import IObserver from "../interfaces/IObserver";
import { WeatherData } from "./WeatherData";
import IDisplayElement from "../interfaces/IDisplayElement";

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(): void {
        this.humidity = this.weatherData.getHumidity();
        this.temperature = this.weatherData.getTemperature();
        this.display();
    }

    public display(): void {
        console.log(
            "Current conditions: " +
                this.temperature +
                "F degrees and " +
                this.humidity +
                "% humidity"
        );
    }
}
