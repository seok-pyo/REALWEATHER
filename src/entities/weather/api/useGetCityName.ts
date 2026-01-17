import { useQuery } from "@tanstack/react-query";

export const getCityName = async (lat?: number, lon?: number) => {
  const response = await fetch(`/api/geoChange?lat=${lat}&lon=${lon}`);

  if (!response.ok) throw new Error("좌표를 주소로 변환하는데 실패하였습니다");
  const data = await response.json();
  console.log(data);

  return data.response?.result?.[0] ?? null;
};

export function useGetCityName(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["cityName", lat, lon],
    queryFn: () => getCityName(lat, lon),
    enabled: !!lat && !!lon,
  });
}
