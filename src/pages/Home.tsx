import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductList from '../components/ProductList';
import BrandShowcase from '../components/BrandShowcase';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <ProductList />
      <BrandShowcase />
    </div>
  );
};

export default Home;