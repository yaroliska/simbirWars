import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllowedEnemies} from "./gameSlice";

export interface EnemiesItem {
  numberOfLine: number;
  idOfEnemies: string;
  type: AllowedEnemies;
  time: number;
}

export type EnemyLine = EnemiesItem[];

type InitialState = {
    lines: EnemyLine[];
}

const enemiesSlice = createSlice({
    name: 'warriors',
    initialState: {
        lines: [],
    } as InitialState,
    reducers: {
        setInitialEnemiesArray(state: InitialState, action: PayloadAction<EnemyLine[]>){
            state.lines = action.payload;
        },
        addEnemiesItem(state: InitialState, action: PayloadAction<EnemiesItem>) {
            debugger;
            const numberOfLine = action.payload.numberOfLine;
            if (state.lines[numberOfLine]){
                state.lines[numberOfLine].push(action.payload);
            } else console.log('ошибка, не могу добавить врага на линию');
        },
        removeEnemiesItem(state: InitialState, action: PayloadAction<EnemiesItem>) {
            const numberOfLine = action.payload.numberOfLine;
            state.lines[numberOfLine] = state.lines[numberOfLine].filter(item => item.idOfEnemies!==action.payload.idOfEnemies);
        }
    }
})


export default enemiesSlice.reducer
export const {addEnemiesItem, removeEnemiesItem, setInitialEnemiesArray} = enemiesSlice.actions