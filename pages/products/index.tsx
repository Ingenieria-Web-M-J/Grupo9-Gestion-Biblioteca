// index.tsx
import Products from '@/components/productdetails';
import React from 'react';

const Index: React.FC = () => {
  return (
    <div>
      <Products
        product={{
          id: 0,
          title: 'Sample Product',
          description: 'This is a sample product description.',
          image: '/path/to/image.jpg',
          price: 99.99,
          category: {
            name: 'Category Name',
            description: 'Category Description',
            id: 1,
          },
          rating: {
            rate: 4.5,
            count: 10,
          },
        }}
      />
    </div>
  );
};

export default Index;

