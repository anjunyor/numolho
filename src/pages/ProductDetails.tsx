import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuItems';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const product = menuItems.find(item => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-yellow-500 mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-yellow-500 hover:text-yellow-400">
            Voltar ao menu
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/carrinho');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto p-4">
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao menu
        </Link>

        <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-yellow-500 mb-2">{product.title}</h1>
            <p className="text-gray-400 mb-4">{product.description}</p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 rounded-full hover:bg-gray-800"
                >
                  <Minus className="w-4 h-4 text-yellow-500" />
                </button>
                <span className="text-lg font-semibold text-yellow-500">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 rounded-full hover:bg-gray-800"
                >
                  <Plus className="w-4 h-4 text-yellow-500" />
                </button>
              </div>
              <div className="text-2xl font-bold text-yellow-500">
                {product.price}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}