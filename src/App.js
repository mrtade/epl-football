import React, { useState } from "react";

import { findPremierLeague } from "./league/fetchPremierLeague";

import TableWrapper from "./components/TableWrapper";

function App() {
  const [requestLeague, setRequestLeague] = useState(false);
  const [league, setLeague] = useState({});

  const handlePremierLeague = async () => {
    const fetchedData = await findPremierLeague();
    setRequestLeague(prevRequestLeague => !prevRequestLeague);
    setLeague(() => {
      const updatedLeague = { ...fetchedData };
      return updatedLeague;
    });
  };

  return (
    <div>
      <button onClick={handlePremierLeague}>Premier Leagues</button>
      {requestLeague ? (
        <div>
          <img src={league.logo} alt={league.name}></img>
          <p>{league.name}</p>
        </div>
      ) : null}
      <TableWrapper />
    </div>
  );
}

export default App;
