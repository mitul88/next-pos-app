import { create } from "zustand";


const useCartStore = create((set) => ({
    items: [],
    subTotal: 0,
    totalAmount: 0,

    addToCart: (item) =>
      set((state) => {
        const existingItem = state.items.find((i) => i.id === item.id);

        if (existingItem) {
          // Update quantity if item already exists
          const updatedCart = state.items.map((i) =>{
            if(i.id === item.id) {
              let quantity = i.quantity + 1
              let itemTotal = quantity * i.price
              return { ...i, quantity, itemTotal }
            } else {
              return i
            }
          });
          let updatedSubTotal = 0;
          updatedCart.forEach(item => updatedSubTotal += item.itemTotal)
          return { items: updatedCart, subTotal: updatedSubTotal };
        }

        // Add new item to the cart
        const updatedCart = [...state.items, { ...item, quantity: 1 }]
        let updatedSubTotal = 0;
        updatedCart.forEach(item => updatedSubTotal += item.itemTotal)
        return { items: updatedCart, subTotal: updatedSubTotal  };
      }),

    removeFromCart: (itemId) => set((state) => {
      let updatedCart = state.items.filter((item) => item.id !== itemId)
      let updatedSubTotal = 0;
      updatedCart.forEach(item => updatedSubTotal += item.itemTotal)
      return { items: updatedCart, subTotal: updatedSubTotal };
    }),

    increaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId) {
          let quantity = item.quantity + 1
          let itemTotal = quantity * item.price
          return { ...item, quantity, itemTotal};
        }
        return item;
      });
      let updatedSubTotal = 0;
      updatedCart.forEach(item => updatedSubTotal += item.itemTotal)
      return { items: updatedCart, subTotal: updatedSubTotal };
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
      let updatedSubTotal = 0;
      updatedCart.forEach(item => updatedSubTotal += item.itemTotal)
      return { items: updatedCart, subTotal: updatedSubTotal };  
    })
  }));
  
  export default useCartStore;