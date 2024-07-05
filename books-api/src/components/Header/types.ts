import { Book } from "../../services/types";
export interface HeaderProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  handleSearch: (
    query: string,
    category: string,
    sort: string
  ) => Promise<void>;
}
