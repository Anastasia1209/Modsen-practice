export interface SearchFormProps {
  onSearch: () => Promise<void>;
  onParamsChange: (
    newSearchParams: Partial<{ query: string; category: string; sort: string }>
  ) => void;
}
