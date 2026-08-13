import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CoinState {
    coins: number;
}

const initialState: CoinState = {
    coins: 12340,
}
const coinSlice = createSlice({
    name: 'coins',
    initialState,

    reducers:{
       setCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },

    addCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload;
    },

    removeCoins: (state, action: PayloadAction<number>) => {
      state.coins -= action.payload;
    },
    }
})

export const {setCoins, addCoins, removeCoins} = coinSlice.actions;
export default coinSlice.reducer;

