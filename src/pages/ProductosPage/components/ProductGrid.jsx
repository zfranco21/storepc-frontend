import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid() {
  // Suponiendo que estos son los productos que puedes cargar desde tu base de datos
  const products = [
    { name: 'Monitor Acer Nitro', price: 306720, img: 'image1.jpg' },
    { name: 'Mouse Corsair M75', price: 72219, img: 'image2.jpg' },
    { name: 'Teclado Corsair K65', price: 155160, img: 'image3.jpg' },
    { name: 'Auriculares Corsair', price: 207180, img: 'image4.jpg' },
    { name: 'Impresora HP LaserJet', price: 286350, img: 'image5.jpg' },
    { name: 'Placa de Video Zotac', price: 662130, img: 'image6.jpg' },
    { name: 'Mouse Pad Corsair', price: 52370, img: 'image7.jpg' },
    { name: 'Monitor Acer Predator', price: 892062, img: 'image8.jpg' },
    { name: 'Impresora Multifuncional', price: 500730, img: 'image9.jpg' },
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
