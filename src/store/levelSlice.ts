import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllowedWarriors } from "../constants/warriors";
import {levels} from "../constants/levels";

export interface Warrior {
    type: AllowedWarriors,
    purchasePrice: number,
    attackPower: number,
    recoveryTimeInSec: number,
};

export interface Level {
    levelId: number,
    nameOfLevel?: string,
    warriors: Warrior[],
    currentAmountOfMoney: number,
};


const levelSlice = createSlice({
    name: 'level',
    initialState: {
        levelId: 0,
        nameOfLevel: 'Ознакомительный уровень',
        warriors: [
            {
                type: AllowedWarriors.programmerJune,
                purchasePrice: 50,
                attackPower: 50,
                recoveryTimeInSec: 5,
            }
        ],
        currentAmountOfMoney: 50,
    },
    reducers: {
        setLevelByInfoByLevelNumber(state: Level, action: PayloadAction<number>) {
            if (levels[action.payload]) {
                state = levels[action.payload]
            }
        },
        increaseMoney(state: Level, action: PayloadAction<number>) {
            state.currentAmountOfMoney = state.currentAmountOfMoney + action.payload;
        }
    }
})

export default levelSlice.reducer;
export const { setLevelByInfoByLevelNumber } = levelSlice.actions;