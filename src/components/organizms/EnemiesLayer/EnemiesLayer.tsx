import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useInitialEnemies} from "./useInitialEnemies";
import EnemiesLine from "../EnemiesLine/EnemiesLine";

const EnemiesLayer: React.FC = () => {
    useInitialEnemies();
    const enemiesLines = useSelector((state: RootState) => state.enemies.lines);

    return (<>
            {
                enemiesLines.map((line, i) => <EnemiesLine key={`line_${i}`} line={line} lineId={i}/>)
            }
      </>
    );
}

export default EnemiesLayer;