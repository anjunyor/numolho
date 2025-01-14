import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderFormData } from '../types';

export function Cart() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'pix',
    notes: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-yellow-500 mb-4">Pedido Realizado com Sucesso!</h1>
          <p className="text-gray-400 mb-6">
            Obrigado por escolher o Nu Molho. Seu pedido está sendo preparado.
          </p>
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Voltar ao Menu
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-yellow-500 mb-4">Seu carrinho está vazio</h1>
          <Link to="/" className="text-yellow-500 hover:text-yellow-400">
            Voltar ao menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto p-4">
        <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao menu
        </Link>

        <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-yellow-500 mb-6">Seu Carrinho</h1>

          <div className="space-y-4 mb-6">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-black rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-yellow-500">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-800"
                  >
                    <Minus className="w-4 h-4 text-yellow-500" />
                  </button>
                  <span className="font-semibold text-yellow-500">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-800"
                  >
                    <Plus className="w-4 h-4 text-yellow-500" />
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 rounded-full hover:bg-red-900"
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xl font-bold text-yellow-500 mb-6">
            Total: R$ {total.toFixed(2).replace('.', ',')}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Nome
              </label>
              <input
                type="text"
                required
                className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                value={orderForm.name}
                onChange={e => setOrderForm({ ...orderForm, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                required
                className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                value={orderForm.phone}
                onChange={e => setOrderForm({ ...orderForm, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Endereço de Entrega
              </label>
              <input
                type="text"
                required
                className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                value={orderForm.address}
                onChange={e => setOrderForm({ ...orderForm, address: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Forma de Pagamento
              </label>
              <select
                className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                value={orderForm.paymentMethod}
                onChange={e => setOrderForm({ ...orderForm, paymentMethod: e.target.value as 'cash' | 'card' | 'pix' })}
              >
                <option value="pix">PIX</option>
                <option value="card">Cartão</option>
                <option value="cash">Dinheiro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Observações
              </label>
              <textarea
                className="w-full p-2 bg-black border border-gray-700 rounded-md text-white"
                rows={3}
                value={orderForm.notes}
                onChange={e => setOrderForm({ ...orderForm, notes: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Finalizar Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}