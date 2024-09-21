import { createContext, useContext } from "react";
import { CartItem } from "../../../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  totalAmount: number;
  addItemToCart: (productId: string) => void;
  updateItemInCart: (ProductId: string, quantity: number) => void;
  removeItemInCart: (prodctId: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalAmount: 0,
  addItemToCart: () => {},
  updateItemInCart: () => {},
  removeItemInCart: () => {},
});

export const useCart = () => useContext(CartContext);
