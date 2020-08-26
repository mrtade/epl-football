import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_endpoint = `https://v2.api-football.com/`;
const leagues_endpoint = `https://v2.api-football.com/leagues/league/`;
const { REACT_APP_FOOTBALL_API_KEY: FOOTBALL_API_KEY } = process.env;

export const fetchPremierLeague = async () => {
  const premier_league_id = 2;
  const endpoint = `${leagues_endpoint}${premier_league_id}`;
  try {
    const api_premier_league = await axios.get(endpoint, {
      params: {},
      headers: {
        "X-RapidAPI-Key": FOOTBALL_API_KEY,
        "content-type": "application/json",
      },
    });

    const {
      data: {
        api: {
          leagues: [premierLeague],
        },
      },
    } = api_premier_league;

    return premierLeague;
  } catch (err) {
    console.log("Error: ", err);
  }
};
