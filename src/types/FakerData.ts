export interface FakerItem {
  title: string;
  description: string;
  url: string;
}

export interface FakerApiResponse {
  status: string;
  code: number;
  locale: string;
  seed: null | string;
  total: number;
  data: FakerItem[];
}