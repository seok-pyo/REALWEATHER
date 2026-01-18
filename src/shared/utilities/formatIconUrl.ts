export function formatIconUrl(condition: string, size?: string) {
  const formatUrl = `https://openweathermap.org/img/wn/${condition}${
    size ?? ""
  }.png`;
  return formatUrl;
}
