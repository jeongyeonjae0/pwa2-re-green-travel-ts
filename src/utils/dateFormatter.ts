export const dateFormatter = {
  /**
   * 스트링 타입의 날짜(YYYYMMDD ~ YYYYMMDDhhmiss)를 `YYYY-MM-DD`로 포맷해서 반환
   * @param strDate - 날짜 문자열
   * @returns YYYY-MM-DD 포맷 문자열
   */
  withHyphenYMD: (strDate: string): string => {
    if (!strDate || strDate.length < 8) return strDate;
    
    return `${strDate.slice(0, 4)}-${strDate.slice(4, 6)}-${strDate.slice(6, 8)}`;
  }
};