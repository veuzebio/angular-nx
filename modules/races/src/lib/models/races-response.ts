export interface RacesResponse {
  count: number;
  results: {
    index: string;
    name: string;
    url: string;
  }[];
}
