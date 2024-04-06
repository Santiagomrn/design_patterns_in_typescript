import IDisplayElement from "../interfaces/IDisplayElement";
import IObserver from "../interfaces/IObserver";
import { WeatherData } from "./WeatherData";

export class StatisticsDisplay implements IObserver, IDisplayElement {
    private maxTemp = 0.0;
    private minTemp = 200;
    private tempSum = 0.0;
    private numReadings: number = 0;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    public update(): void {
        const temperature = this.weatherData.getTemperature();

        this.tempSum += temperature;
        this.numReadings++;

        if (temperature > this.maxTemp) {
            this.maxTemp = temperature;
        }

        if (temperature < this.minTemp) {
            this.minTemp = temperature;
        }

        this.display();
    }

    public display() {
        console.log(
            "Avg/Max/Min temperature = " +
                this.tempSum / this.numReadings +
                "/" +
                this.maxTemp +
                "/" +
                this.minTemp
        );
    }
}
