export interface IBook {
  id: number;
  title: String;
  ratingsCount: number;
  rating: number;
  author: {
    id: number;
    name: string;
  };
  publicationDate: {
    year: number;
    month: number;
    day: number;
  };
  image: string;
}
