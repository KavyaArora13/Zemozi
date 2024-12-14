import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 text-center">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8">Shopping Cart</h1>
      
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={`${item.id}-${item.volume}`} 
                 className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="w-full sm:w-32 h-48 sm:h-32 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Volume: {item.volume}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-600 p-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-base sm:text-lg font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary - Desktop */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="border rounded-lg p-4 sm:p-6 bg-gray-50 lg:sticky lg:top-4">
            <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Order Summary</h2>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Subtotal</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium text-base sm:text-lg">
                <span>Total</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Including GST</p>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 mt-6 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              PROCEED TO CHECKOUT
            </button>
            
            <Link 
              to="/"
              className="block text-center text-xs sm:text-sm text-gray-600 mt-4 hover:text-black"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={`${item.id}-${item.volume}`} 
                 className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Same cart item content as desktop */}
              <div className="w-full sm:w-32 h-48 sm:h-32 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 space-y-3">
                {/* Same product details as desktop */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Volume: {item.volume}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-600 p-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-base sm:text-lg font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary - Mobile */}
        <div className="border rounded-lg p-4 sm:p-6 bg-gray-50">
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Order Summary</h2>
          
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="flex justify-between text-gray-600 text-sm sm:text-base">
              <span>Subtotal</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm sm:text-base">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between font-medium text-base sm:text-lg">
              <span>Total</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Including GST</p>
          </div>
          
          <button 
            onClick={handleCheckout}
            className="w-full bg-black text-white py-3 mt-6 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            PROCEED TO CHECKOUT
          </button>
          
          <Link 
            to="/"
            className="block text-center text-xs sm:text-sm text-gray-600 mt-4 hover:text-black"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;