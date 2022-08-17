import React from 'react';
import styled from "styled-components";
import ScoreInformation from "../../molecules/ScoreInformation/ScoreInformation";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import TurnOffWarrior from "../../molecules/TurnOffWarrior/TurnOfWarrior";

const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Top = styled.div<{height: number}>`
    height: ${props => `${props.height}px`};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #3d8181;
    width: 100%;
`;

const TopMenu: React.FC =() =>{
    const heightOfTop = useSelector((state: RootState) => state.sizes.heightOfTop);
    return (
        <Top height={heightOfTop}>
            <LeftPart>
                <ScoreInformation/>
                <TurnOffWarrior/>
            </LeftPart>
            <div>menu</div>
        </Top>
    );
}

export default TopMenu;