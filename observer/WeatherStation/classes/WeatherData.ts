import IObserver from "../interfaces/IObserver";
import ISubject from "../interfaces/ISubject";

export class WeatherData implements ISubject {
    private observers: IObserver[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }
    public registerObserver(o: IObserver): void {
        this.observers.push(o);
    }

    public removeObserver(o: IObserver): void {
        const index = this.observers.indexOf(o);
        if (index >= -1) this.observers.splice(index, 1);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
    public measurementsChanged() {
        this.notifyObservers();
    }
    public getTemperature(): number {
        return this.temperature;
    }
    public getHumidity(): number {
        return this.humidity;
    }
    public getPressure(): number {
        return this.pressure;
    }

    public setMeasurements(
        temperature: number,
        humidity: number,
        pressure: number
    ) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
