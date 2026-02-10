import { create } from 'zustand';
import axios from 'axios';
import type { Festival, FestivalState } from '../types/festival.types';
import axiosConfig from '../configs/axiosConfig'; // 설정값 불러오기

const useFestivalStore = create<FestivalState>((set) => ({
  festivals: [],
  isLoading: false,
  error: null,

  fetchFestivals: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await axios.get(`${axiosConfig.baseUrl}/areaBasedList1`, {
        params: {
          serviceKey: axiosConfig.serviceKey,
          MobileOS: axiosConfig.MobileOS,
          MobileApp: axiosConfig.MobileApp,
          _type: axiosConfig.type,
          arrange: axiosConfig.arrange,
          contentTypeId: 15,
          numOfRows: 10,
          pageNo: 1,
        },
      });

      const data = response.data?.response?.body?.items?.item;
      
      if (data) {
        set({ festivals: Array.isArray(data) ? data : [data], isLoading: false });
      } else {
        set({ festivals: [], isLoading: false });
      }
      
    } catch (err) {
      console.error(err);
      set({ error: '데이터를 불러오는 중 오류가 발생했습니다.', isLoading: false });
    }
  },
}));

export default useFestivalStore;