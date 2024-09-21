import { createContext, useContext } from "react";
import { CartItem } from "../../../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  totalAmount: number;
  addItemToCart: (productId: string) => void;
  updateItemInCart: (ProductId: string, quantity: number) => void;
  removeItemInCart: (prodctId: string) => void;
  clearCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
  updateItemInCart: () => {},
  removeItemInCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);
