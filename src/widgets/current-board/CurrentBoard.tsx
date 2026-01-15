import { useWeatherQuery } from "@/entities/weather/api/useGetWeather";

export function CurrentBoard() {
  const { status, data, error, isFetching } = useWeatherQuery(
    37.56306450673681,
    127.0375766444892
  );
  console.log(data);
  return <div></div>;
}
