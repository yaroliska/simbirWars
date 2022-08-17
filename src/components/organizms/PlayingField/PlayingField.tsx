import React from 'react';
import {useInitialField} from "./useInitialField";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import WarriorsLayer from "../WarriorsLayer/WarriorsLayer";
import EnemiesLayer from "../EnemiesLayer/EnemiesLayer";


const FieldWrapper = styled.div`
    position: relative;
`;


const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlayingField: React.FC =() => {
    const sizeOfCell = useSelector((state: RootState) => state.sizes.sizeOfCell);
    const { initialObject } = useInitialField();

    return (
        <FieldWrapper>
            <Field>
            {initialObject && initialObject.rows.map((row, i) => <Row key={`row_${i}`}>
                {row.columns.map(cell => <Cell key={`cell_${cell.cellId}`} cell={cell} cellSize={sizeOfCell}/>)}
            </Row>)}
            </Field>
            <WarriorsLayer/>
            <EnemiesLayer/>
        </FieldWrapper>
    );
}

export default PlayingField;