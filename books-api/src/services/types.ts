export interface SelectOption {
  name: string;
  value: string;
}

export interface Book {
  id: string;
  title: string;
  genre: string[];
  authors: string[];
  image: string;
  description: string;
  date: string;
}
