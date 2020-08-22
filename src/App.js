import React, { useState } from "react";

import { fetchFootballStatus, fetchLeagues } from "./fetchData";

function App() {
  const [userData, setUserData] = useState({});
  const [league, setLeague] = useState({});
  const [requestLeague, setRequestLeague] = useState(false);

  const handleUser = async () => {
    const fetchedData = await fetchFootballStatus();
    console.log(fetchedData);
    const { email, requests_limit_day } = fetchedData;

    setUserData(prevUserData => {
      const newUserData = {
        ...prevUserData,
        email: email,
        requests_limit_day: requests_limit_day,
      };
      return newUserData;
    });
  };

  const handleLeagues = async () => {
    const fetchedData = await fetchLeagues();
    const { name, logo } = fetchedData;

    setRequestLeague(prevRequestLeague => !prevRequestLeague);
    setLeague(prevLeague => {
      const updatedLeague = { name, logo };
      return updatedLeague;
    });
  };

  return (
    <div>
      <button onClick={handleUser}>Get Status</button>
      <button onClick={handleLeagues}>Console log Leagues</button>

      <div>User</div>
      <div>{userData.email}</div>
      {requestLeague ? (
        <div>
          <img src={league.logo} alt={league.name}></img>
          <p>{league.name}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
