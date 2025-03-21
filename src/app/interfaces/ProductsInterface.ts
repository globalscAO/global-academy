export interface ProductsInterface {
  id: number;
  title: string;
  typeDuration?: string;
  description: string;
  modality: string;
  certificate: string;
  locale: string;
  startDate: string;
  language: string;
  country: string;
  workload: string;
  coverImg: string;
  teaching?: {
    id: number;
    imgUrl: string;
    name: string;
    description: string;
  }[];
  recipients?: string;
  modules?: string[];
  certificateImgUrls?: string;
}
