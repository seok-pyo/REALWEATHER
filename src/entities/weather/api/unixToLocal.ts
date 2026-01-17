export const unixToLocal = (unix: number) => {
  const date = new Date(unix * 1000);

  return date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
