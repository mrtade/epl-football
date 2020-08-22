import axios from "axios";

const api_point = `https://v2.api-football.com/`;
const { REACT_APP_FOOTBALL_API_KEY: FOOTBALL_API_KEY } = process.env;

export const fetchFootballStatus = async () => {
  const endpoint = `${api_point}status`;

  try {
    const api_football = await axios.get(endpoint, {
      params: {},
      headers: {
        "X-RapidAPI-Key": FOOTBALL_API_KEY,
        "content-type": "application/json",
      },
    });
    const apiStatus = await api_football.data.api.status;
    return apiStatus;
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const fetchLeagues = async () => {
  const endpoint = `${api_point}leagues`;
  try {
    console.log("fetchLeagues!!!!!!");
    const api_football_leagues = await axios.get(endpoint, {
      params: {},
      headers: {
        "X-RapidAPI-Key": FOOTBALL_API_KEY,
        "content-type": "application/json",
      },
    });

    const {
      data: {
        api: { leagues },
      },
    } = api_football_leagues;

    const premier_league = leagues.find(data => {
      return data.league_id === 2;
    });
    console.log("football_leagues: ", leagues);
    console.log("premier_league: ", premier_league);
    return premier_league;
  } catch (err) {
    console.log("Error: ", err);
  }
};
