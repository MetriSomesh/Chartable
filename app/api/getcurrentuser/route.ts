import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export async function GET (
  req: NextApiRequest,
  res: NextApiResponse
){
  try {
    // Make the request from the server to Spotify API
    const response = await axios.get(
      "https://creators.spotify.com/pod/api/currentuser",
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-GB,en;q=0.9",
          "cache-control": "max-age=0",
          cookie: req.cookies["your_cookie_name"], // Get the cookie from the request (if sent)
        },
        withCredentials: true, // Allows sending cookies with request
      }
    );

    // Return the data fetched from Spotify API
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching Spotify user data:", error);
    res.status(500).json({ message: "Error fetching user data from Spotify" });
  }
};

