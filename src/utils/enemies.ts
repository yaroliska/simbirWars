import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AllowedEnemies} from "../store/gameSlice";
import {addEnemiesItem, EnemiesItem, EnemyLine} from "../store/enemiesSlice";
import {generateUniqueId} from "./generationOfId";
import {RootState} from "../store";


const getRandomInt = (min: number, max: number) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


export const generateOneEnemy = (lines: EnemyLine[], type: AllowedEnemies): EnemiesItem => {
    const amountOfEnemiesInLines = lines.map((item,i) => ({
        id: i,
        length: item.length
    }));

    const sortedAmount = amountOfEnemiesInLines.sort(function(a, b) {
        return a.length - b.length;
    });

    const linesWithMinimalEnemies = sortedAmount.filter(item => item.length===sortedAmount[0].length);

    const randomMinimalLineId = linesWithMinimalEnemies[getRandomInt(0, linesWithMinimalEnemies.length)].id;
    return ({
        idOfEnemies: generateUniqueId(),
        numberOfLine: randomMinimalLineId,
        type: type,
        time: 0,
    });
};

export const createEnemiesByOne = (numberOfEnemies: number, timeIntervalInS: number, type: AllowedEnemies, heightAmount: number, lines: EnemyLine[]) => {
    let linesArray: EnemiesItem[][] = [];
    if (lines.length ===0) {
        for (let i =0; i< heightAmount; i++) {
            linesArray.push([]);
        }
    } else linesArray = lines;

    for (let i=0; i<numberOfEnemies; i++) {
        console.log(linesArray);
        const generatedEnemy = generateOneEnemy(linesArray, type);
        linesArray[generatedEnemy.numberOfLine].push({...generatedEnemy, time: i*timeIntervalInS*1000});
    }
    return linesArray;
};