import { WeatherTime } from "@/entities/weather/ui/WeatherTime";

export function TimeTable() {
  return (
    <div className="flex flex-col pl-8 pt-6 mb-12 gap-8 text-zinc-400">
      <h1 className="text-zinc-300 text-xl">행당동 시간별 날씨</h1>
      <div className="flex gap-12 mt-2 md:mt-2">
        <div className="flex flex-col gap-4 whitespace-nowrap">
          <p className="pb-38">오늘</p>
          <p>강수확률</p>
          <p>강수량</p>
          <p>습도</p>
          <p>자외선지수</p>
          <p>구름</p>
        </div>
        <div className="flex overflow-auto w-4/5 gap-8 scrollbar-hide">
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
        </div>
      </div>
    </div>
  );
}
