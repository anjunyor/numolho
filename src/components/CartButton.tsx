import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function CartButton() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link
      to="/carrinho"
      className="fixed bottom-4 right-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
}