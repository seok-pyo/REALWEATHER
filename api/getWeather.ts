import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { lat, lon } = req.query;

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`
    );

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}
