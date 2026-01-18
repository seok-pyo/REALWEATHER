import { useQuery } from "@tanstack/react-query";

const fetchWeather = async (lat?: number, lon?: number) => {
  const response = await fetch(`/api/getWeather?lat=${lat}&lon=${lon}`);

  if (!response.ok) throw new Error("날씨 데이터를 가져오는데 실패하였습니다.");
  return response.json();
};

export function useGetWeather(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    enabled: !!lat && !!lon,
  });
}
