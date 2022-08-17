import React from 'react';
import Programmer from "../Programmer/Programmer";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {AllowedWarriors} from "../../../constants/warriors";

const WarriorsLayer: React.FC = () => {
    const warriorsItemsArray = useSelector((state: RootState) => state.warriors.warriorsArray);

    return (
        <>
            {warriorsItemsArray.map(item => {
                debugger;
             switch (item.type) {
                 case (AllowedWarriors.programmerJune): {
                     return <Programmer x={item.cellCenter.x} y={item.cellCenter.y}/>
                     break;
                 }
                 default: <></>
             }
            })}
        </>
    );
}

export default WarriorsLayer;