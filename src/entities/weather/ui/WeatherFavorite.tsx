import StarIcon from "@/shared/assets/star-favorite.svg";
import { useGetWeather } from "../api";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";

interface Props {
  item: {
    address: string;
    lat: number;
    lon: number;
  };
}

export function WeatherFavorite({ item }: Props) {
  const { setCoords } = useLocationStore();
  const { removeFavorite } = useFavoriteStore();

  const { data: weather } = useGetWeather(item.lat, item.lon);
  const handleCardClick = () => {
    setCoords(item.lat, item.lon);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeFavorite(item.address);
  };
  const favoritePlace = item.address.split(" ");

  return (
    <div
      className="bg-zinc-300 h-24 md:h-48 md:rounded-xl flex justify-around items-center md:flex-col"
      onClick={handleCardClick}
    >
      <div className="flex gap-2 md:self-start md:ml-4">
        <img src={StarIcon} className="w-5" onClick={handleRemove} />
        <p className="truncate max-w-25">
          {`${favoritePlace[1]} ${favoritePlace[2]}`}
        </p>
      </div>
      <div className="flex gap-4">
        {weather && (
          <img
            src={`https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}.png`}
          />
        )}
        <div className="flex md:flex-col gap-4 md:gap-0">
          <p>{weather?.current.temp.toFixed(1)}</p>
          <p>{weather?.current.weather[0].main}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col md:flex-row items-center">
          <p>최저</p>
          <p>{weather?.daily[0].temp.min.toFixed(1)}°</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <p>최고</p>
          <p>{weather?.daily[0].temp.max.toFixed(1)}°</p>
        </div>
      </div>
    </div>
  );
}
