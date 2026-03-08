"use client";

import { createContext, useContext, useMemo, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartContextValue {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;
      return prev.filter((_, i) => i !== index);
    });
  };

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      totalPrice,
      addItem,
      removeItem,
    }),
    [items, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
