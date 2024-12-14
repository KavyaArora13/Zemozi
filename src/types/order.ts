export type OrderStatus = "pending" | "processing" | "delivered" | "cancelled";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  volume: string;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;  // Using the specific OrderStatus type
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