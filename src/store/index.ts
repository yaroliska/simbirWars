import { combineReducers, configureStore } from "@reduxjs/toolkit";
import warriorSlice from "./warriorSlice";
import gameSlice from "./gameSlice";
import levelSlice from "./levelSlice";
import sizesSlice from "./sizesSlice";
import enemiesSlice from "./enemiesSlice";

const rootReducer = combineReducers({
    warriors: warriorSlice,
    game: gameSlice,
    level: levelSlice,
    sizes: sizesSlice,
    enemies: enemiesSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
});