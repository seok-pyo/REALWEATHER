import { WeatherBoard } from "@/entities/weather";
import { GetCurrentLocation } from "../api/GetCurrentLocation";
import { useGetCityName, useGetWeather } from "@/entities/weather/api";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useEffect } from "react";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";

export function CurrentBoard() {
  const { coords } = GetCurrentLocation();
  const { lat, lon, setCoords } = useLocationStore();
  const { addFavorite, removeFavorite, isFavorite, favorites } =
    useFavoriteStore();

  useEffect(() => {
    if (coords?.lat && coords?.lon) {
      setCoords(coords.lat, coords.lon);
    }
  }, [coords, setCoords]);

  const { data, isLoading } = useGetWeather(lat, lon);
  const { data: locationData } = useGetCityName(lat, lon);

  const currentAddress = locationData?.text || "";
  const favorited = isFavorite(currentAddress);

  const currentFavorite = favorites.find((f) => f.lat === lat && f.lon === lon);
  const nickName = currentFavorite?.alias;

  const handleToggleFavorite = () => {
    if (!currentAddress) return;

    if (favorited) {
      removeFavorite(currentAddress);
    } else if (favorites.length < 6) {
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
      isLoading={isLoading}
      nickName={nickName}
    />
  );
}
