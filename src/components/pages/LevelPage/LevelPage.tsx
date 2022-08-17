import React from 'react';
import styled from "styled-components";
import PlayingField from "../../organizms/PlayingField/PlayingField";
import WarriorsMenu from "../../organizms/WarriorsMenu/WarriorsMenu";
import TopMenu from "../../organizms/TopMenu/TopMenu";

const LeftSide = styled.div`
  width: 100%;
  background-color: #234e4d;
`;

const RightSide = styled.div`
    width: 70%;
  background-color: #234e4d;
`;

const Top = styled.div<{height: number}>`
    height: ${props => `${props.height}px`};
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #3d8181;
    width: 100%;
`;

const ContentPart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

const LevelPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelPage: React.FC =() =>{
    return (
        <LevelPageLayout>
            <TopMenu/>
            <ContentPart>
            <LeftSide>
                <WarriorsMenu/>
            </LeftSide>
            <PlayingField/>
            <RightSide/>
            </ContentPart>
        </LevelPageLayout>
    );
}

export default LevelPage;