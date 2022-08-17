import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllowedWarriors} from "../constants/warriors";

export enum AllowedEnemies {
    typoInCode = 'typo_in_code',
    undefined = 'undefind',
}

export enum GameStatus {
    loading = 'loading',
    play = 'play',
    pause = 'pause',
    default='default'
}

export enum UserAction {
    getWarrior='getWarrior',
    default='default',
};

interface UserActionInfo {
    type: UserAction,
    warriorType?: AllowedWarriors,
};

interface Game {
    level: number,
    statusOfGame: GameStatus,
    useCurrentActionInfo: UserActionInfo | null,
    allowedWarriors: AllowedWarriors[],
    allowedEnemies: AllowedEnemies[],
}

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        level: 0,
        statusOfGame: GameStatus.loading,
        useCurrentActionInfo: {
            type: UserAction.default,
        },
        allowedWarriors: [AllowedWarriors.programmerJune],
        allowedEnemies: [AllowedEnemies.typoInCode],
    } as Game,
    reducers: {
        increaseLevel(state: Game) {
            state.level = state.level + 1;
        },
        setStatusOfGame(state: Game, action: PayloadAction<GameStatus>){
            state.statusOfGame= action.payload;
        },
        addAllowedWarriors(state: Game, action: PayloadAction<AllowedWarriors>){
            state.allowedWarriors.push(action.payload);
        },
        addAllowedEnemies(state:Game, action: PayloadAction<AllowedEnemies>){
            state.allowedEnemies.push(action.payload);
        },
        setUserActionInfo(state: Game, action: PayloadAction<UserActionInfo>){
            state.useCurrentActionInfo = action.payload;
        },
        resetCurrentUserAction(state: Game){
            state.useCurrentActionInfo = {
                type: UserAction.default
            };
        }
    }
})

export default gameSlice.reducer;
export const { setUserActionInfo, resetCurrentUserAction } = gameSlice.actions;