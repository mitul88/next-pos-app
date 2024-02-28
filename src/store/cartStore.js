import { create } from "zustand";


const useCartStore = create((set) => ({
    items: [],
    subTotal: 0,
    totalAmount: 0,
    tax: 25.00,
    shipping: 5.50,
    discount: 10.00,
    productQuantity: 0,

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
          let productQuantity = 0;
          let updatedSubTotal = 0;
          updatedCart.forEach(item => {
            updatedSubTotal += item.itemTotal;
            productQuantity += item.quantity
          })
          let totalAmount = updatedSubTotal + state.tax + state.shipping - state.discount
          return { items: updatedCart, subTotal: updatedSubTotal, productQuantity, totalAmount };
        }

        // Add new item to the cart
        const updatedCart = [...state.items, { ...item, quantity: 1 }]
        let productQuantity = 0;
        let updatedSubTotal = 0;
        updatedCart.forEach(item => {
          updatedSubTotal += item.itemTotal
          productQuantity += item.quantity
        })
        let totalAmount = updatedSubTotal + state.tax + state.shipping - state.discount
        return { items: updatedCart, subTotal: updatedSubTotal, productQuantity, totalAmount };
      }),

    removeFromCart: (itemId) => set((state) => {
      let updatedCart = state.items.filter((item) => item.id !== itemId)
      let productQuantity = 0;
      let updatedSubTotal = 0;
      updatedCart.forEach(item => {
        updatedSubTotal += item.itemTotal
        productQuantity += item.quantity
      })
      let totalAmount = updatedSubTotal + state.tax + state.shipping - state.discount
      return { items: updatedCart, subTotal: updatedSubTotal, productQuantity, totalAmount };
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
      let productQuantity = 0;
      let updatedSubTotal = 0;
      updatedCart.forEach(item => {
        updatedSubTotal += item.itemTotal
        productQuantity += item.quantity
      })
      let totalAmount = updatedSubTotal + state.tax + state.shipping - state.discount
      return { items: updatedCart, subTotal: updatedSubTotal, productQuantity, totalAmount };
    }),
    
    decreaseQuantity: (itemId) => set((state) => {
      const updatedCart = state.items.map(item => {
        if (item.id === itemId && item.quantity > 1) {
          let quantity = item.quantity + 1
          let itemTotal = quantity * item.price
          return { ...item, quantity, itemTotal };
        }
        return item;
      });
      let productQuantity = 0;
      let updatedSubTotal = 0;
      updatedCart.forEach(item => {
        updatedSubTotal += item.itemTotal
        productQuantity += item.quantity
      })
      let totalAmount = updatedSubTotal + state.tax + state.shipping - state.discount
      return { items: updatedCart, subTotal: updatedSubTotal, productQuantity, totalAmount };
    })
  }));
  
  export default useCartStore;