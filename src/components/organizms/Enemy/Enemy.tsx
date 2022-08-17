import React from 'react';
import Typo from "../Enemies/Typo/Typo";
import {EnemiesItem, EnemyLine} from "../../../store/enemiesSlice";
import {AllowedEnemies} from "../../../store/gameSlice";

type EnemyProps = {
    enemy: EnemiesItem
}

const Enemy: React.FC<EnemyProps> = ({enemy}) => {
    switch(enemy.type) {
        case AllowedEnemies.typoInCode: {
            return <Typo/>
            break;
        }
        default: return <></>
    }
};

export default Enemy;