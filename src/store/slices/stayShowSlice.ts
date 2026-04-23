import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface StayInfo {
  [key: string]: any; 
}

// 2. 초기 상태의 타입을 정의합니다.
interface StayShowState {
  stayInfo: StayInfo | Record<string, never>;
}

const initialState: StayShowState = {
  stayInfo: {},
};

const stayShowSlice = createSlice({
  name: 'stayShowSlice',
  initialState,
  reducers: {
    setStayInfo(state, action: PayloadAction<StayInfo>) {
      state.stayInfo = action.payload;
    },
  }
});

export const { setStayInfo } = stayShowSlice.actions;

export default stayShowSlice.reducer;