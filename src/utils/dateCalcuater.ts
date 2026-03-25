export const dateCalculater = {
  /**
   * 현 시간 기준 timestamp만큼 과거의 날짜를 계산하여 Date객체 반환 
   * @param timestamp 밀리초(ms) 단위의 시간
   * @returns Date
   */
  getPastDate: (timestamp: number): Date => {
    const now: Date = new Date();
    return new Date(now.getTime() - timestamp);
  }
};