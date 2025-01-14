import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <Link 
      to={`/produto/${item.id}`}
      className="block hover:bg-gray-900 p-4 rounded-lg transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-yellow-500">{item.title}</h3>
          {item.description && (
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          )}
        </div>
        <span className="font-bold text-yellow-500">{item.price}</span>
      </div>
    </Link>
  );
}