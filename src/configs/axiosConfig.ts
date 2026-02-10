interface AxiosConfig {
  serviceKey: string;
  MobileOS: 'WEB' | 'ETC' | 'AND' | 'IOS'; // 허용된 값만 넣도록 제한할 수 있습니다.
  MobileApp: string;
  type: string;
  arrange: string;
  baseUrl: string;
  NUM_OF_ROWS: number;
}

const axiosConfig: AxiosConfig = {
  serviceKey: '3492fcd88f0c993747ac2a44d4053de47df154d84350f9731e3781d9ab527a5e',
  MobileOS: 'WEB',
  MobileApp: 'GreenTravel',
  type: 'json',
  arrange: 'O',
  baseUrl: 'https://apis.data.go.kr/B551011/KorService2',
  NUM_OF_ROWS: 50,
};

export default axiosConfig;