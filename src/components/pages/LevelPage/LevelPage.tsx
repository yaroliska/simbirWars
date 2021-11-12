import React from 'react';
import styled from "styled-components";
import PlayingField from "../../organizms/PlayingField/PlayingField";

const LeftSide = styled.div`

`;

const LevelPageLayout = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const LevelPage: React.FC =() =>{
    return (
        <LevelPageLayout>
            <LeftSide>leftSide</LeftSide>
            <PlayingField/>
        </LevelPageLayout>
    );
}

export default LevelPage;