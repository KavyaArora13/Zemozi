export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    volume: string;
    image: string;
  }
  
  export interface Order {
    id: string;
    items: OrderItem[];
    totalAmount: number;
    status: 'pending' | 'processing' | 'delivered' | 'cancelled';
    orderDate: string;
    deliveryAddress: {
      fullName: string;
      address: string;
      city: string;
      state: string;
      zipCode: string;
      phone: string;
    };
  }