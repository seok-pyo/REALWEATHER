import StarIcon from "@/shared/assets/star-favorite.svg";
import { useGetWeather } from "@/entities/weather/api";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";
import { useState } from "react";
import { useToggleStore } from "@/shared/store/useToggleStore";

interface Props {
  item: {
    address: string;
    lat: number;
    lon: number;
    alias?: string;
  };
}

export function WeatherFavorite({ item }: Props) {
  const { setCoords } = useLocationStore();
  const { removeFavorite, updateFavoriteAlias } = useFavoriteStore();
  const [placeAlias, setPlaceAlias] = useState(item.alias || "");
  const [isEditing, setIsEditing] = useState(false);
  const { setCloseToggle } = useToggleStore();

  const { data: weather, isLoading } = useGetWeather(item.lat, item.lon);
  const handleCardClick = () => {
    setCoords(item.lat, item.lon);
    setCloseToggle(true);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeFavorite(item.address);
  };
  const favoritePlace = item.address.split(" ");

  const handleNameClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceAlias(e.target.value);
  };

  const handleOutFocus = () => {
    setIsEditing(false);
    updateFavoriteAlias(item.address, placeAlias);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateFavoriteAlias(item.address, placeAlias);
    }
  };

  if (isLoading)
    return (
      <div className="h24 md:h-48">
        <p className="text-zinc-600">데이터를 불러오고 있습니다</p>
      </div>
    );

  return (
    <div
      className="bg-zinc-300 h-24 md:h-48 md:rounded-xl flex justify-around items-center md:flex-col"
      onClick={handleCardClick}
    >
      <div className="flex gap-2 md:self-start md:ml-4">
        <img src={StarIcon} className="w-5" onClick={handleRemove} />
        {isEditing ? (
          <input
            type="text"
            value={placeAlias}
            onChange={handleChangeName}
            onBlur={handleOutFocus}
            onKeyDown={handleKeyDown}
            autoFocus
            className="truncate max-w-25 bg-transparent border-b border-zinc-600 outline-none"
          />
        ) : (
          <p
            className="truncate max-w-25 font-bold text-zinc-800"
            onClick={handleNameClick}
          >
            {placeAlias || `${favoritePlace[1]} ${favoritePlace[2]}`}
          </p>
        )}
      </div>
      <div className="flex gap-2 md:-mt-3">
        {weather?.current.weather[0]?.icon ? (
          <img
            src={`https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}.png`}
            className="hidden md:block"
          />
        ) : (
          <div className="w-12 h-12 bg-zinc-500 rounded-full flex items-center justify-center"></div>
        )}
        <div className="flex md:flex-col gap-4 md:gap-0 items-center">
          <p className="text-2xl font-bold">
            {weather?.current.temp.toFixed(1)}°
          </p>
          <p className="text-zinc-600">{weather?.current.weather[0].main}</p>
        </div>
      </div>
      <div
        className="flex gap-y-0 gap-x-2 md:-mt-2 specific-range"
        onClick={handleCardClick}
      >
        <div className="md:flex hidden items-center gap-2">
          <p className="text-zinc-700 font-bold whitespace-nowrap">최저</p>
          <p className="text-red-500">
            {weather?.daily[0].temp.min.toFixed(1)}°
          </p>
        </div>
        <div className="md:flex hidden items-center gap-2">
          <p className="text-zinc-700 font-bold whitespace-nowrap">최고</p>
          <p className="text-blue-500">
            {weather?.daily[0].temp.max.toFixed(1)}°
          </p>
        </div>
      </div>
    </div>
  );
}
