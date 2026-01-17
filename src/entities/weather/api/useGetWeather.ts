import { useQuery } from "@tanstack/react-query";

const fetchWeather = async (lat?: number, lon?: number) => {
  const response =
    await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${
      import.meta.env.VITE_OPENWEATHER_API_KEY
    }
`);

  if (!response.ok)
    return new Error("날씨 데이터를 가져오는데 실패하였습니다.");
  return response.json();
};

export function useGetWeather(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat, lon),
  });
}
