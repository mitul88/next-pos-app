import { create } from "zustand";


const useCartStore = create((set) => ({
    items: [],
    subTotal: 0,
    addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
    removeFromCart: (itemId) => set((state) => ({ items: state.items.filter((item) => item.id !== itemId) })),
    increaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId) {
          let quantity = item.quantity + 1
          let itemTotal = quantity * item.price
          return { ...item, quantity, itemTotal};
        }
        return item;
      });
      return { items: updatedCart };
    }),
    decreaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId && item.quantity > 1) {
          let quantity = item.quantity - 1
          let itemTotal = quantity * item.price
          return { ...item, quantity, itemTotal };
        }
        return item;
      });
      return { items: updatedCart };  
    })
  }));
  
  export default useCartStore;