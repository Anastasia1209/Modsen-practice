import { Book } from "../../types/types";
export interface HeaderProps {
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  handleSearch: () => Promise<void>;
  handleSearchParamsChange: (
    newSearchParams: Partial<{ query: string; category: string; sort: string }>
  ) => void;
}
