export interface Festival {
  contentid: string;
  title: string;
  addr1: string;
  firstimage?: string;
  eventstartdate: string;
  eventenddate: string;
}

export interface FestivalState {
  festivals: Festival[];
  isLoading: boolean;
  error: string | null;
  fetchFestivals: () => Promise<void>;
}