import React from 'react';
import styled from "styled-components";
import {ReactComponent as TurnOff} from './TurnOff.svg';

const TurnOffWarriorContainer = styled.div`
  padding: 0 0 0 15px;
  position: relative;
  font-size: 23px;
  font-weight: 600;
  color: white;
  display: flex;

  div {
    align-self: center;
    background-color: rgba(61, 129, 129, 0.8);
    display: flex;
    align-items: center;
    z-index: 1;
    border-radius: 10px;
    padding: 10px 5px;

    :hover {
      background-color: rgba(74, 248, 248, 0.5);
      cursor: pointer;
    }
  }
`;

const TurnOffSvg = styled(TurnOff)`
  top: 0;
  position: absolute;
  left: 40px;
`;

const TurnOffWarrior: React.FC =() => {
    return (
        <TurnOffWarriorContainer>
            <TurnOffSvg/>
            <div>Отключить</div>
        </TurnOffWarriorContainer>
    );
}

export default TurnOffWarrior;