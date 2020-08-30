import React from "react";
import styled from "styled-components";
import LeagueLogo from "./TableStyles";
import TableItem from "./TableItem";

const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  margin: 1rem 0;
  padding: 1rem 0;
`;

const TableHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0 auto;
  height: 2rem;

  div {
    margin: 0 0.25rem;
  }
`;

const TableHeadingClub = styled.div`
  margin: 0;
  min-width: 20.5rem;
  background-color: Purple;
  color: ${props => (props.primary ? "white" : "blue")};
  height: 100%;
  display: flex;
  align-items: center;

  p {
    margin: 0 0.5rem;
  }
`;

const TableHeadingPoints = styled.div`
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

const TableHeadingMatchesPlayed = styled(TableHeadingPoints)`
  background-color: green;
`;

const TableHeadingWin = styled(TableHeadingPoints)`
  background-color: purple;
`;

const TableHeadingDraw = styled(TableHeadingPoints)`
  background-color: orange;
`;

const TableHeadingLose = styled(TableHeadingPoints)`
  background-color: blue;
`;

const TableHeadingGoalsFor = styled(TableHeadingPoints)`
  background-color: yellow;
`;

const TableHeadingGoalsAgainst = styled(TableHeadingPoints)`
  background-color: green;
`;

const TableHeadingGoalDiff = styled(TableHeadingPoints)`
  background-color: orange;
`;

function TableWrapper() {
  return (
    <TableWrap>
      <TableHeading>
        <LeagueLogo>
          <img
            src="https://media.api-sports.io/football/leagues/39.png"
            alt=""
          ></img>
        </LeagueLogo>
        <TableHeadingClub primary>
          <p>Clubs</p>
        </TableHeadingClub>
        <TableHeadingMatchesPlayed>
          <p>MP</p>
        </TableHeadingMatchesPlayed>
        <TableHeadingPoints>
          <p>P</p>
        </TableHeadingPoints>
        <TableHeadingWin>
          <p>W</p>
        </TableHeadingWin>
        <TableHeadingDraw>
          <p>D</p>
        </TableHeadingDraw>
        <TableHeadingLose>
          <p>L</p>
        </TableHeadingLose>
        <TableHeadingGoalsFor>
          <p>GF</p>
        </TableHeadingGoalsFor>
        <TableHeadingGoalsAgainst>
          <p>GA</p>
        </TableHeadingGoalsAgainst>
        <TableHeadingGoalDiff>
          <p>GD</p>
        </TableHeadingGoalDiff>
      </TableHeading>

      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
      <TableItem></TableItem>
    </TableWrap>
  );
}

export default TableWrapper;
