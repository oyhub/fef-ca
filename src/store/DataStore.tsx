import { create } from 'zustand';
import { Data } from '../components/api/getData/getData.tsx';

export type DataStoreState = {
  data: Data[];
  setData: (term: Data[]) => void;
};

export const useDataStore = create<DataStoreState>((set) => ({
  data: [],
  setData: (products) => set({ data: products }),
}));

export default useDataStore;