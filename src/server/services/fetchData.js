import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const api_endpoint = `https://v2.api-football.com/`;
const leagues_endpoint = `https://v2.api-football.com/leagues/league/`;
const premier_league_table_endpoint = `leagueTable/`;

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

export const fetchPremierLeagueTable = async () => {
  const premier_league_id = 2;
  const endpoint = `${api_endpoint}${premier_league_table_endpoint}${premier_league_id}`;
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
          standings: [standings_array],
        },
      },
    } = api_premier_league;
    console.log("standings ?: ", standings_array);
    console.log("typeof standings ?: ", typeof standings_array);

    return standings_array;
  } catch (err) {
    console.log("Error: ", err);
  }
};
