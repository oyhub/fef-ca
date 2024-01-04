import { create } from 'zustand';
import { Data } from '../components/api/getData/getData.tsx';

export type DataItem = {
  id: string;
  title: string;
  tags?: string[];
};

export type DataStructure = {
  [key: string]: DataItem[];
};

export type SearchStoreState = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: Data[];
  setSearchResults: (results: Data[]) => void;
};

export const useSearchStore = create<SearchStoreState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),
}));

export default useSearchStore;