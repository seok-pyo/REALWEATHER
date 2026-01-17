import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { lat, lon } = req.query;

  const API_KEY = process.env.GEO_API_KEY;

  try {
    const response = await fetch(
      `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&crs=epsg:4326&point=${lon},${lat}&format=json&type=both&zipcode=true&simple=false&key=${API_KEY}`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
