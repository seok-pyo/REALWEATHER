import { useGetWeather } from "@/entities/weather/api";
import { WeatherTime } from "@/entities/weather/ui/WeatherTime";
import { GetCurrentLocation } from "../current-board/api/getCurrentLocation";
import type { WeatherItem } from "@/entities/weather/model";
import ArrowLeft from "@/shared/assets/arrow-left.svg";
import ArrowRight from "@/shared/assets/arrow-right.svg";

export function TimeBoard() {
  const { coords } = GetCurrentLocation();
  const { data, isLoading } = useGetWeather(coords?.lat, coords?.lon);

  if (isLoading)
    return <div className="pt-6 pl-8">데이터를 불러오고 있습니다</div>;

  return (
    <div className="flex flex-col pl-8 pt-6 mb-12 gap-8 text-zinc-400">
      <h1 className="text-zinc-300 text-xl">행당동 시간별 날씨</h1>
      <div className="flex gap-12 mt-2 md:mt-2 relative">
        <div className="hidden absolute top-1/2 -translate-y-1/2 items-center md:flex justify-between w-9/10 pr-12 left-20">
          <img className="w-8" src={ArrowLeft} />
          <img className="w-8" src={ArrowRight} />
        </div>
        <div className="flex flex-col gap-4 whitespace-nowrap">
          <p className="pb-38">오늘</p>
          <p>강수확률</p>
          <p>강수량</p>
          <p>습도</p>
          <p>자외선지수</p>
          <p>구름</p>
        </div>
        <div className="flex overflow-auto w-4/5 gap-8 scrollbar-hide">
          {data?.hourly.map((item: WeatherItem<number>) => (
            <WeatherTime key={item.dt} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
