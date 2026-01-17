import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const API_KEY = process.env.GEO_API_KEY;
  const { place } = req.query;

  try {
    const response =
      await fetch(`https://api.vworld.kr/req/address?service=address&request=getcoord&version=2.0&crs=epsg:4326&address=${place}&refine=true&simple=false&format=json&type=road&key=${API_KEY}
					`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
