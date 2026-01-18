import { useQuery } from "@tanstack/react-query";

export const getCityName = async (lat?: number, lon?: number) => {
  if (lat === undefined || lon === undefined) return null;
  const response = await fetch(`/api/geoChange?lat=${lat}&lon=${lon}`);

  if (!response.ok) throw new Error("좌표를 주소로 변환하는데 실패하였습니다");
  const data = await response.json();

  return data.response?.result?.[0] || { text: "위치 정보 없음" };
};

export function useGetCityName(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["cityName", lat, lon],
    queryFn: () => getCityName(lat, lon),
    enabled: !!lat && !!lon,
  });
}
