import { WeatherBoard } from "@/entities/weather";
import { GetCurrentLocation } from "../api/getCurrentLocation";
import { useGetCityName, useGetWeather } from "@/entities/weather/api";
// import { useWeatherQuery } from "@/entities/weather/api/useGetWeather";
// import { useGetCityName } from "@/shared";

export function CurrentBoard() {
  // const { status, data, error, isFetching } = useWeatherQuery(
  //   37.56306450673681,
  //   127.0375766444892
  // );
  // console.log(data);

  // const { data: locationData } = useGetCityName(
  //   127.0375766444892,
  //   37.56306450673681
  // );
  // console.log(locationData);

  // const data = {
  //   lat: 127.0375766444892,
  //   lon: 37.56306450673681,
  //   current: {
  //     dt: 1684929490,
  //     sunrise: 1684926645,
  //     sunset: 1684977332,
  //     temp: 292.55,
  //     humidity: 89,
  //     uvi: 0.26,
  //     clouds: 53,
  //     weather: [
  //       {
  //         id: 803,
  //         main: "clouds",
  //         description: "broken clouds",
  //         icon: "04d",
  //       },
  //     ],
  //   },
  //   hourly: [
  //     {
  //       dt: 1684929490,
  //       sunrise: 1684926645,
  //       sunset: 1684977332,
  //       temp: 292.55,
  //       humidity: 89,
  //       uvi: 0.26,
  //       clouds: 53,
  //       weather: [
  //         {
  //           id: 803,
  //           main: "clouds",
  //           description: "broken clouds",
  //           icon: "04d",
  //         },
  //       ],
  //     },
  //   ],
  // };

  const locationData = {
    type: "parcel",
    text: "서울특별시 성동구 행당동 387",
    structure: {
      level: "대한민국",
      level1: "서울특별시",
      level2: "성동구",
      level3: "",
      level4L: "행당동",
    },
  } as const;

  const { coords } = GetCurrentLocation();
  // const { data: locationData } = useGetCityName(coords?.lat, coords?.lon);
  const { data } = useGetWeather(coords?.lat, coords?.lon);
  console.log(data);

  return <WeatherBoard data={data} location={locationData} />;
}
