import { create } from "zustand";


const useCartStore = create((set) => ({
    items: [],
    addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
    removeFromCart: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
    increaseItem: (itemId) =>set((state) => ({})),
    decreaseItem: (itemId) =>set((state) => ({})),
  }));
  
  export default useCartStore;