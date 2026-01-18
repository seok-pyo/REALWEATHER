import { WeatherFavorite } from "@/entities/weather/ui/WeatherFavorite";
import { useFavoriteStore } from "@/shared/store/useFavoriteStore";

export function FavoriteList() {
  const { favorites } = useFavoriteStore();

  return (
    <div className="pl-8 pr-8 pt-6 h-full flex flex-col">
      <h1 className="mb-8 text-zinc-300 text-xl">즐겨찾기</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-y-auto scrollbar-hide pb-6">
        {favorites.map((item) => (
          <WeatherFavorite key={item.address} item={item} />
        ))}
      </div>

      <p className="text-center mt-6 mb-6 text-zinc-500">
        {!favorites.length && "원하는 지역을 저장해보세요"}
        {favorites.length === 6 ? (
          <p className="text-teal-500">즐겨찾기를 모두 저장했어요</p>
        ) : (
          favorites.length !== 0 && (
            <span>
              최대 개수(6개) 중{" "}
              <span className="text-teal-500">{`${favorites.length}`}</span>
              개를 저장했어요
            </span>
          )
        )}
      </p>
    </div>
  );
}
