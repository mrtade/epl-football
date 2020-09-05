import React from "react";
import styled from "styled-components";

const TeamRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem auto;
  height: 2rem;
  border: 1px solid #4e4e4e;
  border-radius: 8px;

  div {
    margin: 0 0.25rem;
    border: 1px solid transparent;
  }
`;

const TeamRank = styled.div`
  min-width: 2rem;
  flex-basis: 2rem;
  text-align: center;
  height: 100%;
  color: #000;
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

  img {
    width: 100%;
  }
`;

const TeamName = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-basis: 18rem;
  min-width: 18rem;

  p {
    margin: 0 0 0 0.25rem;
    color: #000;
  }
`;

const TeamMatchesPlayed = styled.div`
  min-width: 2rem;
  flex-basis: 2rem;
  height: 100%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const TeamPoints = styled(TeamMatchesPlayed)``;

const TeamWin = styled(TeamMatchesPlayed)``;

const TeamDraw = styled(TeamMatchesPlayed)``;

const TeamLose = styled(TeamMatchesPlayed)``;

const TeamGoalsFor = styled(TeamMatchesPlayed)``;

const TeamGoalsAgainst = styled(TeamMatchesPlayed)``;

const TeamGoalDiff = styled(TeamMatchesPlayed)``;

function TableItem(props) {
  return (
    <TeamRow>
      <TeamRank>
        <p>{props.rank}</p>
      </TeamRank>
      <TeamLogo>
        <img src={props.logo} alt={props.teamName}></img>
      </TeamLogo>
      <TeamName>
        <p>{props.teamTitle}</p>
      </TeamName>
      <TeamMatchesPlayed>
        <p>{props.matchesPlayed}</p>
      </TeamMatchesPlayed>
      <TeamPoints>
        <p>{props.points}</p>
      </TeamPoints>
      <TeamWin>
        <p>{props.matchesWin}</p>
      </TeamWin>
      <TeamDraw>
        <p>{props.matchesDraw}</p>
      </TeamDraw>
      <TeamLose>
        <p>{props.matchesLose}</p>
      </TeamLose>
      <TeamGoalsFor>
        <p>{props.goalsFor}</p>
      </TeamGoalsFor>
      <TeamGoalsAgainst>
        <p>{props.goalsAgainst}</p>
      </TeamGoalsAgainst>
      <TeamGoalDiff>
        <p>{props.goalsDiff}</p>
      </TeamGoalDiff>
    </TeamRow>
  );
}

export default TableItem;
