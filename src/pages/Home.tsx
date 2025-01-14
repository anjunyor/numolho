import React from 'react';
import { menuItems } from '../data/menuItems';

export function Home() {
  const hotdogs = menuItems.filter(item => item.category === 'hotdog');
  const bebidas = menuItems.filter(item => item.category === 'bebidas');

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black py-6 px-4 text-center border-b border-yellow-500">
        <img 
          src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&h=100&fit=crop" 
          alt="Nu Molho Logo" 
          className="h-20 mx-auto mb-4"
        />
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Hot Dogs Section */}
        <section className="mb-8">
          <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4">
            HOT DOG
          </div>
          <div className="space-y-4">
            {hotdogs.map(item => (
              <div key={item.id} className="block p-4 rounded-lg hover:bg-gray-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-yellow-500">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    )}
                  </div>
                  <span className="font-bold text-yellow-500">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bebidas Section */}
        <section className="mb-8">
          <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4">
            BEBIDAS
          </div>
          <div className="space-y-4">
            {bebidas.map(item => (
              <div key={item.id} className="block p-4 rounded-lg hover:bg-gray-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-yellow-500">{item.title}</h3>
                  </div>
                  <span className="font-bold text-yellow-500">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maioneses Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Maioneses</h2>
          <p className="text-gray-400">(Não enviamos separadas)</p>
          <p className="text-yellow-500">Sabores: alho, bacon e ervas</p>
        </section>

        {/* Embalagem Section */}
        <section className="mb-8">
          <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4">
            EMBALAGEM P/ VIAGEM
          </div>
          <p className="text-center text-white">R$ 1,00 cada</p>
        </section>

        {/* Pagamento Section */}
        <section className="mb-8">
          <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4">
            PAGAMENTO
          </div>
          <ul className="list-none space-y-2 text-white">
            <li>PIX</li>
            <li>Débito</li>
            <li>Crédito</li>
            <li>Dinheiro</li>
          </ul>
          <p className="text-sm text-gray-400 mt-2">Dê preferência ao PIX</p>
          <p className="text-sm text-gray-400">CNPJ 34.954.542/0001-15</p>
        </section>

        {/* Horários e Redes Sociais */}
        <section className="text-center">
          <div className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4">
            HORÁRIOS E REDES SOCIAIS
          </div>
          <div className="space-y-2 text-white">
            <p>@NUMOLHO</p>
            <p>(81) 99968-9969 RETIRADA</p>
            <p>ENTREGAS PELO IFOOD</p>
            <p>QUINTA A TERÇA DAS 18H ÀS 22:30H</p>
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-400 py-6 px-4 text-center border-t border-yellow-500 mt-8">
        <p>© {new Date().getFullYear()} Nu Molho. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}