import React from 'react';
import styled from "styled-components";
import {Cell as CellType} from "../PlayingField/types";
import {useDispatch, useSelector} from "react-redux";
import {addWarrior} from "../../../store/warriorSlice";
import {RootState} from "../../../store";
import {AllowedEnemies, resetCurrentUserAction, UserAction} from "../../../store/gameSlice";
import {generateUniqueId} from "../../../utils/generationOfId";
import {checkIfExists} from "../../../utils/warriors";

const getColor = (id: string): string => {
    const arr = id.split('');
    if (+arr[0] % 2) {
        return (+arr[1])%2? '#FFFFFF': '#DAF8F2';
    }
    return (+arr[1])%2? '#DAF8F2': '#FFFFFF';
};

const CellDiv = styled.div<{size: number, id: string}>`
  display: flex;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  background-color: ${props => getColor(props.id)};
  color: ${props => getColor(props.id)};

  :hover {
    box-shadow: 0 0 10px 10px #a2efe1;
    z-index: 1;
  }
`;

type CellProps = {
    cell: CellType;
    cellSize: number;
}
const Cell: React.FC<CellProps> =({cell, cellSize}) => {
    const userCurrentAction = useSelector((state: RootState)=> state.game.useCurrentActionInfo);
    const enemiesLines = useSelector((state: RootState)=> state.enemies.lines);
    const warriorsArray = useSelector((state: RootState) => state.warriors.warriorsArray);
    const { cellId, cellCenter } = cell;
    const dispatch = useDispatch();

    const onClickCell = () => {
        if (userCurrentAction?.type=== UserAction.getWarrior && userCurrentAction?.warriorType) {
            const newWarrior = {
                idOfWarrior: generateUniqueId(),
                idOfCell: cellId,
                type: userCurrentAction.warriorType,
                cellCenter: cellCenter,
            }
            if (!checkIfExists(warriorsArray, newWarrior)) {
               dispatch(addWarrior(newWarrior));
               dispatch(resetCurrentUserAction());
            } else console.log(`ячейка ${cellId} занята`);
        }

        //записывает данные о том, что в чейке должен находиться объект
    }

    return (
      <CellDiv size={cellSize} id={cellId} onClick={onClickCell}>{cellId}</CellDiv>
    );
}

export default Cell;