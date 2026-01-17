import { WeatherBoard } from "@/entities/weather";
import { GetCurrentLocation } from "../api/GetCurrentLocation";
import { useGetCityName, useGetWeather } from "@/entities/weather/api";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useEffect } from "react";

export function CurrentBoard() {
  const { coords } = GetCurrentLocation();
  const { lat, lon, setCoords } = useLocationStore();

  useEffect(() => {
    if (coords?.lat && coords?.lon) {
      setCoords(coords.lat, coords.lon);
    }
  }, [coords, setCoords]);

  const { data } = useGetWeather(lat, lon);
  const { data: locationData, isLoading } = useGetCityName(lat, lon);
  if (isLoading) console.log("데이터를 가져오는 중");

  return <WeatherBoard data={data} location={locationData} />;
}
