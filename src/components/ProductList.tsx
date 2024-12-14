import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Export the products array so it can be imported in Header
export const products = [
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

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div 
      className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg bg-white"
      onClick={() => handleProductClick(product.id)}
    >
      {/* Product Image */}
      <div className="mb-4 sm:mb-6 flex justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{product.category}</p>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-900 font-medium mb-8">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
        <div className="flex-1 flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <span className="hidden sm:block text-gray-400 w-8 md:w-16 h-[1px] bg-gray-400"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 text-center">
            DISCOVER BEAUTY FOR ALL
          </h2>
          <span className="hidden sm:block text-gray-400 w-8 md:w-16 h-[1px] bg-gray-400"></span>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden relative">
        <div className="[&_.swiper-button-next]:text-black [&_.swiper-button-next]:font-bold 
                        [&_.swiper-button-next]:text-xl [&_.swiper-button-next]:hidden 
                        [&_.swiper-button-next]:md:block
                        
                        [&_.swiper-button-prev]:text-black [&_.swiper-button-prev]:font-bold 
                        [&_.swiper-button-prev]:text-xl [&_.swiper-button-prev]:hidden 
                        [&_.swiper-button-prev]:md:block
                        
                        [&_.swiper-pagination-bullet]:bg-black 
                        [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2
                        [&_.swiper-pagination-bullet-active]:opacity-100
                        [&_.swiper-pagination]:bottom-0
                        [&_.swiper-pagination]:pb-4">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Desktop/Tablet Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;