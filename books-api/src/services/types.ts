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

export interface BookCardProps {
  book: Book[];
}

export interface HeaderProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  handleSearch: (
    query: string,
    category: string,
    sort: string
  ) => Promise<void>;
}

export interface SearchFormProps {
  onSearch: (query: string, category: string, sort: string) => void;
}
