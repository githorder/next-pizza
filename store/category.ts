import { create } from "zustand";

interface CategoryState {
  activeId: number;
  setActiveId: (id: number) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
  activeId: 1,
  setActiveId: (id: number) => set({ activeId: id }),
}));

export default useCategoryStore;
