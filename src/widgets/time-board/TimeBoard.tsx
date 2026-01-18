import { useGetCityName, useGetWeather } from "@/entities/weather/api";
import { WeatherTime } from "@/entities/weather/ui/WeatherTime";
import { GetCurrentLocation } from "@/widgets/current-board/api";
import type { WeatherItem } from "@/entities/weather/model";
import ArrowLeft from "@/shared/assets/arrow-left.svg";
import ArrowRight from "@/shared/assets/arrow-right.svg";
import { formatCityName } from "@/shared/utilities/formatCityName";
import { useLocationStore } from "@/shared/store/useLocationStore";
import { useEffect, useRef } from "react";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";

export function TimeBoard() {
  const { coords } = GetCurrentLocation();
  const { lat, lon, setCoords } = useLocationStore();
  const { favorites } = useFavoriteStore();
  const timeLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (coords?.lat && coords?.lon) {
      setCoords(coords.lat, coords.lon);
    }
  }, [coords, setCoords]);

  const { data, isLoading } = useGetWeather(lat, lon);
  const { data: location } = useGetCityName(lat, lon);

  const currentFavorite = favorites.find((f) => f.lat === lat && f.lon === lon);
  const nickName = currentFavorite?.alias;

  const formattedTitle = location ? formatCityName(location) : "";
  const boardTitle = location ? formattedTitle.split(" ")[1] : "";

  const handleScroll = (direc: "left" | "right") => {
    if (timeLineRef.current) {
      const mount = 40;
      if (direc === "right") {
        timeLineRef.current.scrollLeft += mount;
      } else {
        timeLineRef.current.scrollLeft -= mount;
      }
    }
  };

  if (isLoading)
    return (
      <div className="pt-6 pl-8 w-100 h-[90vh] text-zinc-600">
        데이터를 불러오고 있습니다
      </div>
    );

  return (
    <div className="flex flex-col pl-8 pt-6 mb-12 gap-8 text-zinc-400">
      {!isLoading ? (
        <h1 className="text-zinc-300 text-xl">
          {nickName || `${boardTitle} 시간별 날씨`}
        </h1>
      ) : (
        <h1 className="text-zinc-600">데이터를 불러오고 있습니다</h1>
      )}
      <div className="flex gap-8 mt-2 md:mt-2 relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 items-center flex justify-between w-9/10 pr-12 left-20">
          <img
            className="w-5"
            src={ArrowLeft}
            onClick={() => handleScroll("left")}
          />
          <img
            className="w-5"
            src={ArrowRight}
            onClick={() => handleScroll("right")}
          />
        </div>
        <div className="flex flex-col gap-4 whitespace-nowrap">
          <p className="pb-40 text-zinc-300">오늘</p>
          <p className="text-zinc-300">강수확률</p>
          <p className="text-zinc-300">강수량</p>
          <p className="text-zinc-300">습도</p>
          <p className="text-zinc-300">자외선지수</p>
          <p className="text-zinc-300">구름</p>
        </div>
        <div
          className="flex overflow-auto w-4/5 gap-8 scrollbar-hide"
          ref={timeLineRef}
        >
          {data?.hourly.map((item: WeatherItem<number>) =>
            isLoading ? <></> : <WeatherTime key={item.dt} data={item} />
          )}
        </div>
      </div>
    </div>
  );
}
