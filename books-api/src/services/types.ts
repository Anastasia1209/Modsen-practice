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

export interface VolumeInfo {
  title: string;
  categories?: string[];
  authors?: string[];
  imageLinks?: {
    thumbnail: string;
  };
  description?: string;
  publishedDate?: string;
}

export interface GoogleBooksResponse {
  totalItems: number;
  items: GoogleBookItem[];
}

export interface GoogleBookItem {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface SearchResult {
  books: Book[];
  totalItems: number;
}

export interface BookCardProps {
  books: Book[];
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
