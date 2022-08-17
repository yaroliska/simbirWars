import React from 'react';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {AllowedWarriorsLabels} from "../../../constants/warriors";
import {Warrior} from "../../../store/levelSlice";
import { setUserActionInfo, UserAction} from "../../../store/gameSlice";

const WarriorsItemWrapper = styled.button`
  color: white;
  font-size: 24px;
  font-weight: 600;
  background-color: transparent;
  border-style: solid;
  padding: 10px;
  border-radius: 10px;
  border-color: #4b6f72;
  :hover, :focus{
    border-color: #6cc1b1;
    background-color: rgba(91, 209, 198, 0.3);
    cursor: pointer;
  }
`;

type WarriorsItemProps = {
    warriorItem: Warrior;
};

const WarriorsItem: React.FC<WarriorsItemProps> =({ warriorItem }) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setUserActionInfo({
            type: UserAction.getWarrior,
            warriorType: warriorItem.type,
        }));
    };

    return (
        <WarriorsItemWrapper onClick={onClick}>{AllowedWarriorsLabels[warriorItem.type]}</WarriorsItemWrapper>
    );
}

export default WarriorsItem;