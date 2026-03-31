import { createSlice } from "@reduxjs/toolkit";

// 1️⃣ Festival 타입 정의 (실제 데이터에 맞게 수정 추천)
export interface Festival {
  contentid: string;
  title: string;
  eventstartdate: string;
  eventenddate: string;
  firstimage: string;
  addr1: string;
  addr2: string;
}

// 2️⃣ slice state 타입 정의
interface FestivalShowState {
  festivalInfo: Festival | null;
}

// 3️⃣ 초기 상태
const initialState: FestivalShowState = {
  festivalInfo: null,
};

// 4️⃣ slice 생성
const festivalShowSlice = createSlice({
  name: "festivalShow",
  initialState,
  reducers: {
    setFestivalInfo(state, action) {
      state.festivalInfo = action.payload;
    },
  },
});

// 5️⃣ actions export
export const { setFestivalInfo } = festivalShowSlice.actions;

// 6️⃣ reducer export
export default festivalShowSlice.reducer;