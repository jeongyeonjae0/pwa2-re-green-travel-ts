import { create } from 'zustand';
import axios from 'axios';
import type { Festival, FestivalState } from '../types/festival.types';
import axiosConfig from '../configs/axiosConfig';

const useFestivalStore = create<FestivalState>((set) => ({
  festivals: [],
  isLoading: false,
  error: null,
  page: 1,
  scrollEventFlg: true,

  setScrollEventFlg: (flg) => set({ scrollEventFlg: flg }),

  fetchFestivals: async (targetPage: number) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${axiosConfig.baseUrl}/areaBasedList1`, {
        params: {
          serviceKey: axiosConfig.serviceKey,
          MobileOS: axiosConfig.MobileOS,
          MobileApp: axiosConfig.MobileApp,
          _type: axiosConfig.type,
          arrange: axiosConfig.arrange,
          numOfRows: axiosConfig.NUM_OF_ROWS,
          pageNo: targetPage,
          contentTypeId: 15,
        },
      });

      const data = response.data?.response?.body?.items?.item;
      const newItems = Array.isArray(data) ? data : data ? [data] : [];

      set((state) => ({
        festivals: targetPage === 1 ? newItems : [...state.festivals, ...newItems],
        page: targetPage,
        isLoading: false,
        scrollEventFlg: newItems.length > 0,
      }));
    } catch (err) {
      set({ error: '로드 실패', isLoading: false, scrollEventFlg: false });
    }
  },
}));

export default useFestivalStore;