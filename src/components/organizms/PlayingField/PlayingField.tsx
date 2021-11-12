import React from 'react';
import {useInitialField} from "./useInitialField";
import styled from "styled-components";
import Programmer from "../Programmer/Programmer";
import Cell from "../Cell/Cell";


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

    const { initialObject, sizes } = useInitialField({widthAmount: 8, heightAmount: 5});

    return (
        <FieldWrapper>
            <Field>
            {initialObject && initialObject.rows.map(row => <Row>
                {row.columns.map(cell => <Cell cell={cell} cellSize={sizes.sizeOfFieldCell}/>)}
            </Row>)}
            </Field>
            <Programmer/>
        </FieldWrapper>
    );
}

export default PlayingField;