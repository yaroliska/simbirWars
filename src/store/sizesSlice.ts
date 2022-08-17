import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Level} from "./levelSlice";

interface InitialCalculates {
    sizeOfCell: number;
    widthAmount: number;
    heightAmount: number;
    heightOfTop: number;
}

const sizesSlice = createSlice({
    name: 'sizes',
    initialState: {
        sizeOfCell: 0,
        widthAmount: 8,
        heightAmount: 5,
        heightOfTop: 50,
    },
    reducers: {
        setSizeOfCell(state: InitialCalculates, actions: PayloadAction<number>){
            state.sizeOfCell = actions.payload;
        },
    },
})

export default sizesSlice.reducer;
export const { setSizeOfCell } = sizesSlice.actions;