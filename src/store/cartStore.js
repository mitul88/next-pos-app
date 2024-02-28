import { create } from "zustand";


const useCartStore = create((set) => ({
    items: [],
    addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
    removeFromCart: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
    increaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { items: updatedCart };
    }),
    decreaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { items: updatedCart };  
    }),
  }));
  
  export default useCartStore;