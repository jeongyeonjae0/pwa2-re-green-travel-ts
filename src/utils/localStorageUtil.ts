import {
  KEY_LOCALSTORAGE_FASTIVAL_FLG,
  KEY_LOCALSTORAGE_FESTIVAL_PAGE,
  KEY_LOCALSTORAGE_FESTIVAL_LIST
} from "../configs/keys.ts";

// 필요하면 실제 Festival 타입 정의해서 교체하세요
type Festival = any;

export const localStorageUtil = {
  /**
   * 로컬스토리지에 페스티벌 리스트 저장
   */
  setFestivalList: (data: Festival[]): void => {
    localStorage.setItem(
      KEY_LOCALSTORAGE_FESTIVAL_LIST,
      JSON.stringify(data)
    );
  },

  /**
   * 로컬스토리지에 페스티벌 리스트 반환
   */
  getFestivalList: (): Festival[] => {
    const data = localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_LIST);
    return data ? JSON.parse(data) : [];
  },

  /**
   * 로컬스토리지에 페스티벌 페이지 번호 저장
   */
  setFestivalPage: (pageNo: number): void => {
    localStorage.setItem(
      KEY_LOCALSTORAGE_FESTIVAL_PAGE,
      JSON.stringify(pageNo)
    );
  },

  /**
   * 로컬스토리지의 페스티벌 페이지 번호 반환
   */
  getFestivalPage: (): number => {
    const data = localStorage.getItem(KEY_LOCALSTORAGE_FESTIVAL_PAGE);
    return data ? JSON.parse(data) : 1; // 기본값 1
  },

  /**
   * 로컬스토리지에 페스티벌 스크롤 플래그 저장
   */
  setFestivalScrollFlg: (flg: boolean): void => {
    localStorage.setItem(
      KEY_LOCALSTORAGE_FASTIVAL_FLG,
      JSON.stringify(flg)
    );
  },

  /**
   * 로컬스토리지의 페스티벌 스크롤 플래그 반환
   */
  getFestivalScrollFlg: (): boolean => {
    const data = localStorage.getItem(KEY_LOCALSTORAGE_FASTIVAL_FLG);
    return data ? JSON.parse(data) : false;
  }
};