import { WeatherBoard } from "@/entities/weather";
import { GetCurrentLocation } from "../api/GetCurrentLocation";
import { useGetCityName, useGetWeather } from "@/entities/weather/api";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useEffect } from "react";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";

export function CurrentBoard() {
  const { coords } = GetCurrentLocation();
  const { lat, lon, setCoords } = useLocationStore();
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();

  useEffect(() => {
    if (coords?.lat && coords?.lon) {
      setCoords(coords.lat, coords.lon);
    }
  }, [coords, setCoords]);

  const { data } = useGetWeather(lat, lon);
  const { data: locationData } = useGetCityName(lat, lon);

  const currentAddress = locationData?.text || "";
  const favorited = isFavorite(currentAddress);

  const handleToggleFavorite = () => {
    if (!currentAddress) return;

    if (favorited) {
      removeFavorite(currentAddress);
    } else {
      addFavorite({
        address: currentAddress,
        lat,
        lon,
      });
    }
  };

  return (
    <WeatherBoard
      data={data}
      location={locationData}
      isFavorite={favorited}
      onToggleFavorite={handleToggleFavorite}
    />
  );
}
