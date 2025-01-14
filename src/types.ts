export interface MenuItem {
  id: string;
  title: string;
  price: string;
  description?: string;
  category: string;
  image?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  paymentMethod: 'cash' | 'card' | 'pix';
  notes?: string;
}