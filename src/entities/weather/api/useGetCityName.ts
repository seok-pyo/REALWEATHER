import { useQuery } from "@tanstack/react-query";

export const getCityName = async (lat?: number, lon?: number) => {
  const response = await fetch(`https://api.vworld.kr/req/address?
service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${lat},${lon}
&format=json&type=both&zipcode=true&simple=false&key=${
    import.meta.env.VITE_GEO_API_KEY
  }`);

  if (!response.ok) return new Error("좌표를 주소로 변환하는데 실패하였습니다");

  const data = await response.json();
  return data.response.result[0];
};

export function useGetCityName(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["cityName", lat, lon],
    queryFn: () => getCityName(lat, lon),
  });
}
