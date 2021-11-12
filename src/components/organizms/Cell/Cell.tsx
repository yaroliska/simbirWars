import React from 'react';
import styled from "styled-components";
import {Cell as CellType} from "../PlayingField/types";

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
    const { cellId, cellCenter } = cell;

    const getCellInfo = () => {
        console.log('cellCeneter', cellCenter);
        //записывает данные о том, что в чейке должен находиться объект
    }

    return (
      <CellDiv size={cellSize} id={cellId} onClick={getCellInfo}>{cellId}</CellDiv>
    );
}

export default Cell;