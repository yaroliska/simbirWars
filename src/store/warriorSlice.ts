import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllowedWarriors} from "../constants/warriors";

export interface WarriorItem {
  idOfCell: string;
  idOfWarrior: string;
  type: AllowedWarriors;
  cellCenter: {
      x: number,
      y: number,
  }
}

type InitialState = {
    warriorsArray: WarriorItem[],
}

const warriorsSlice = createSlice({
    name: 'warriors',
    initialState: {
        warriorsArray: [],
    } as InitialState,
    reducers: {
        addWarrior(state: InitialState, action: PayloadAction<WarriorItem>) {
            state.warriorsArray.push(action.payload);
        },
        removeWarriorById(state: InitialState, action) {
            state.warriorsArray = state.warriorsArray.filter(item => item !== action.payload);
        }
    }
})


export default warriorsSlice.reducer
export const { addWarrior, removeWarriorById} = warriorsSlice.actions