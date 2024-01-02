import { create } from 'zustand';

export type DataItem = {
  title: string;
  tags: string[];
};

export type DataStructure = {
  [key: string]: DataItem[];
};

export type SearchStoreState = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: DataItem[];
  setSearchResults: (results: DataItem[]) => void;
};

export const useSearchStore = create<SearchStoreState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));

export default useSearchStore;