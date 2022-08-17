import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import WarriorsItem from "../../molecules/WarriorsItem/WarriorsItem";


const WarriorsMenuWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const WarriorsMenu: React.FC =() => {

    const warriors = useSelector((state: RootState) => state.level.warriors)

    //TODO дизейблим то на что не хватает денег или то что ещё нельзя поставить из-за времени
    return (
        <WarriorsMenuWrapper>
            {warriors.map((item, i) =>
                <WarriorsItem key={`${item.type}_${i}`} warriorItem={item}/>
            )}
        </WarriorsMenuWrapper>
    );
}

export default WarriorsMenu;