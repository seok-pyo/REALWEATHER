import { WeatherFavorite } from "@/entities/weather/ui/WeatherFavorite";

export function FavoriteList() {
  return (
    <div className="pl-8 pr-8 pt-6 h-full flex flex-col">
      <h1 className="mb-4 text-zinc-300">즐겨찾기</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-y-auto">
        <WeatherFavorite />
        <WeatherFavorite />
        <WeatherFavorite />
        <WeatherFavorite />
        <WeatherFavorite />
        <WeatherFavorite />
      </div>
      <p className="text-center mt-6 text-zinc-500">
        즐겨찾기를 모두 저장했어요
      </p>
    </div>
  );
}
