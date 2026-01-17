import { useState, useEffect } from "react";

export function GetCurrentLocation() {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert("위치 정보를 지원하지 않습니다.");
    }
  }, []);

  return { coords };
}
