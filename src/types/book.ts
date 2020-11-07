export interface IBook {
  id: number;
  title: string;
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
