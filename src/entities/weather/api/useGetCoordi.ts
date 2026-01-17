import { useQuery } from "@tanstack/react-query";

export const getCoordi = async (place: string) => {
  const response = await fetch(`/api/nameChange?place=${place}`);

  if (!response.ok) throw new Error("주소를 좌표로 변환하는데 실패하였습니다");
  const data = await response.json();

  console.log(data);
  if (data.response?.status === "OK") {
    return data.response.result.point;
  }

  return null;
};

export function useGetCoordi(place: string) {
  return useQuery({
    queryKey: ["place", place],
    queryFn: () => getCoordi(place),
    enabled: !!place,
  });
}
