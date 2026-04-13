import { createAsyncThunk } from "@reduxjs/toolkit";
import stayAxiosConfig from "../../configs/stayAxiosConfig";
import axios from "axios";

interface StayItem {
  contentid: string;
  title: string;
  addr1: string;
  firstimage: string;
}

interface StayResponseBody {
  items: {
    item: StayItem[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

interface RootState {
  stay: {
    page: number;
  };
}

export const stayIndex = createAsyncThunk<
  StayResponseBody,   // 반환 타입
  void,               // arg 타입 (지금은 없음)
  { state: RootState } // thunkAPI 타입
>(
  "staySlice/stayIndex",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const url = `${stayAxiosConfig.BASE_URL}/searchStay2`;

    const config = {
      params: {
        serviceKey: stayAxiosConfig.SERVICE_KEY,
        MobileOS: stayAxiosConfig.MOBILE_OS,
        MobileApp: stayAxiosConfig.MOBILE_APP,
        _type: stayAxiosConfig.TYPE,
        arrange: stayAxiosConfig.ARRANGE,
        numOfRows: stayAxiosConfig.NUM_OF_ROWS,
        pageNo: state.stay.page + 1,
      },
    };

    const response = await axios.get(url, config);

    return response.data.response.body;
  }
);