import type { WeatherData } from "../model";

interface Props {
  data?: WeatherData;
}

export function WeatherTime(data: Props) {
  return (
    <div className="flex flex-col gap-4 whitespace-nowrap">
      <p>13시</p>

      <div className="mt-8 mb-8 flex flex-col gap-4">
        <img src="https://openweathermap.org/img/wn/10d.png" />
        <p>-3.2</p>
      </div>
      <p>30</p>
      <p>0</p>
      <p>70</p>
      <p>0.16</p>
      <p>적음</p>
    </div>
  );
}
