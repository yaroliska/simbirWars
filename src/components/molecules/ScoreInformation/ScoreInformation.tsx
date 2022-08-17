import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";


const ScoreWrapper = styled.div`
  font-size: 35px;
  color: white;
  font-weight: 600;
  display: flex;
  padding: 0 15px;
`;

const ScoreInformation: React.FC =() => {

    const score = useSelector((state: RootState) => state.level.currentAmountOfMoney);

    return (
        <ScoreWrapper>
            <div>{score} $</div>
        </ScoreWrapper>
    );
}

export default ScoreInformation;