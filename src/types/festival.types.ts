export interface Festival {
  contentid: string;
  title: string;
  addr1: string;
  firstimage?: string;
  eventstartdate: string;
  eventenddate: string;
  createdtime?: string;
}

export interface FestivalState {
  festivals: Festival[];
  isLoading: boolean;
  error: string | null;
  page: number;
  scrollEventFlg: boolean;
  setScrollEventFlg: (flg: boolean) => void;
  fetchFestivals: (targetPage: number) => Promise<void>;
}