import './Products.css';
import React from 'react';
import pcPromo from '../assets/pcPromo.webp';

const Products = ({ name, price, image }) => {
  return (
    <div>
    <section className='container'>

    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>
    
    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>

    {/* Codigo utilizable con base de datos
      <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>*/}
 {name} {price} {image}
    </section>

    <section className='container'>

    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>
    
    <div className="product-card">
      <img className='pcPromo' src={pcPromo} alt="promocion navideña" />
      <h3>Gabinete Antec C5 ARGB Black 7x120mm Vidrio Templado 270°</h3>
      <h2>20% OFF</h2>
      <p>$ 184.950</p>
      <button>Add to Cart</button>
    </div>

    {/* Codigo utilizable con base de datos
      <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>*/}
 {name} {price} {image}
    </section>

    
    </div>
  );
};

export default Products;
