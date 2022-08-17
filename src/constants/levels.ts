import { AllowedWarriors } from "./warriors";
import {Level} from "../store/levelSlice";

const level0 = {
    levelId: 0,
    nameOfLevel: 'Ознакомительный уровень',
    warriors: [
    {
        type: AllowedWarriors.programmerJune,
        purchasePrice: 50,
        attackPower: 50,
        recoveryTimeInSec: 5,
    },
],
    currentAmountOfMoney: 50,
};

const level1 = {
    levelId: 1,
    nameOfLevel: 'Ознакомительный уровень',
    warriors: [
        {
            type: AllowedWarriors.programmerJune,
            purchasePrice: 50,
            attackPower: 50,
            recoveryTimeInSec: 5,
        }
    ],
    currentAmountOfMoney: 0,
}
export const levels: Level[] = [level0, level1];