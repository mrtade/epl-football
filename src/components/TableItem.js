import React from "react";
import styled from "styled-components";

const TeamRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem auto;
  background-color: #fff;
  height: 2rem;

  div {
    margin: 0 0.25rem;
  }
`;

const TeamRank = styled.div`
  min-width: 2rem;
  flex-basis: 2rem;
  text-align: center;
  background-color: blue;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    padding: 0;
  }
`;

const TeamLogo = styled.div`
  max-width: 2rem;
  flex-basis: 2rem;
  height: 100%;
  position: relative;
  background-color: orange;

  img {
    width: 100%;
  }
`;

const TeamName = styled.div`
  display: flex;
  align-items: center;
  background-color: purple;
  height: 100%;
  flex-basis: 18rem;
  min-width: 18rem;

  p {
    margin: 0 0 0 0.25rem;
    color: white;
  }
`;

const TeamMatchesPlayed = styled.div`
  min-width: 2rem;
  flex-basis: 2rem;
  height: 100%;
  color: #fff;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const TeamPoints = styled(TeamMatchesPlayed)`
  background-color: yellow;
`;

const TeamWin = styled(TeamMatchesPlayed)`
  background-color: purple;
`;

const TeamDraw = styled(TeamMatchesPlayed)`
  background-color: brown;
`;

const TeamLose = styled(TeamMatchesPlayed)`
  background-color: pink;
`;

const TeamGoalsFor = styled(TeamMatchesPlayed)`
  background-color: red;
`;

const TeamGoalsAgainst = styled(TeamMatchesPlayed)`
  background-color: orange;
`;

const TeamGoalDiff = styled(TeamMatchesPlayed)`
  background-color: brown;
`;

function TableItem(props) {
  return (
    <TeamRow>
      <TeamRank>
        <p>1</p>
      </TeamRank>
      <TeamLogo>
        <img
          src="https://media.api-sports.io/football/leagues/39.png"
          alt=""
        ></img>
      </TeamLogo>
      <TeamName>
        <p>Manchester United</p>
      </TeamName>
      <TeamPoints>
        <p>20</p>
      </TeamPoints>
      <TeamMatchesPlayed>
        <p>38</p>
      </TeamMatchesPlayed>
      <TeamWin>
        <p>120</p>
      </TeamWin>
      <TeamDraw>
        <p>20</p>
      </TeamDraw>
      <TeamLose>
        <p>20</p>
      </TeamLose>
      <TeamGoalsFor>
        <p>20</p>
      </TeamGoalsFor>
      <TeamGoalsAgainst>
        <p>20</p>
      </TeamGoalsAgainst>
      <TeamGoalDiff>
        <p>20</p>
      </TeamGoalDiff>
    </TeamRow>
  );
}

export default TableItem;
