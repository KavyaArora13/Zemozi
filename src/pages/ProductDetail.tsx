import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Mock product data remains the same
const products = [
  {
    id: 1,
    category: 'HAIRCARE',
    name: 'Shampoo',
    price: 1499,
    image: '/images/product1.png',
    volume: ['250ml', '500ml'],
    benefits: [
      'Deep cleansing formula',
      'Nourishes from root to tip',
      'Sulfate-free gentle cleansing',
      'Suitable for daily use'
    ],
    description: 'A gentle, daily-use shampoo that cleanses and nourishes your hair from root to tip.'
  },
  {
    id: 2,
    category: 'HAIRCARE',
    name: 'Conditioner',
    price: 1299,
    image: '/images/product2.png',
    volume: ['250ml', '500ml'],
    benefits: [
      'Deep conditioning',
      'Prevents split ends',
      'Reduces frizz',
      'Adds natural shine'
    ],
    description: 'A rich conditioning treatment that transforms dry, lifeless hair into smooth, manageable locks.'
  },
  {
    id: 3,
    category: 'SKINCARE',
    name: 'Cream',
    price: 2899,
    image: '/images/product3.png',
    volume: ['30ml', '50ml', '100ml'],
    benefits: [
      'Intense hydration',
      'Anti-aging properties',
      'Suitable for all skin types',
      'Non-comedogenic'
    ],
    description: 'A luxurious face cream that provides intense hydration and nourishment to your skin.'
  },
  {
    id: 4,
    category: 'SKINCARE',
    name: 'Facewash',
    price: 999,
    image: '/images/product4.png',
    volume: ['100ml', '200ml'],
    benefits: [
      'Gentle cleansing',
      'Removes impurities',
      'Maintains skin pH',
      'Suitable for daily use'
    ],
    description: 'A gentle face wash that effectively cleanses while maintaining your skin\'s natural moisture barrier.'
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedVolume, setSelectedVolume] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedVolume) {
      alert('Please select a volume');
      return;
    }
    
    addToCart(product, quantity, selectedVolume);
    alert('Product added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Left: Product Image */}
        <div className="flex items-center justify-center mb-8 lg:mb-0">
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-6 sm:space-y-8">
          {/* Product Title and Price */}
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-2xl sm:text-3xl font-medium mb-2">{product.name}</h1>
            <p className="text-lg sm:text-xl">₹ {product.price.toLocaleString()}</p>
          </div>

          {/* Description */}
          <div className="text-gray-600 text-sm sm:text-base">
            <p>{product.description}</p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-2">
            <h2 className="font-medium text-base sm:text-lg">KEY BENEFITS</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Volume Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">VOLUME</label>
            <select 
              className="w-full border border-gray-300 p-2 focus:outline-none text-sm sm:text-base"
              value={selectedVolume}
              onChange={(e) => setSelectedVolume(e.target.value)}
            >
              <option value="">Select Volume</option>
              {product.volume.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-24">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full border border-gray-300 p-2 focus:outline-none text-sm sm:text-base"
              />
            </div>
            <button 
              className="w-full sm:flex-1 bg-black text-white py-2 px-6 hover:bg-gray-800 transition-colors disabled:bg-gray-400 text-sm sm:text-base"
              disabled={!selectedVolume}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>

          {/* Additional Information Accordion */}
          <div className="space-y-4 pt-6 sm:pt-8">
            {['HOW TO USE', 'INGREDIENTS', 'PRODUCT DETAILS', 'SHIPPING & RETURNS'].map((tab) => (
              <div key={tab} className="border-t border-gray-200">
                <button 
                  className="w-full flex items-center justify-between py-2 text-sm sm:text-base"
                  onClick={() => setActiveTab(activeTab === tab ? null : tab)}
                >
                  <span className="font-medium">{tab}</span>
                  <span>{activeTab === tab ? '-' : '+'}</span>
                </button>
                {activeTab === tab && (
                  <div className="py-3 text-sm sm:text-base text-gray-600">
                    {/* Add your content here */}
                    Sample content for {tab}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;