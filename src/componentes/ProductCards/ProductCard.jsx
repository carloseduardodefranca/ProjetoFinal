

import React from 'react';
import './ProductCard.css';

 function ProductCard(props) {
  
  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleBuyClick = () => {
    alert(`Você adicionou o produto: ${props.title} ao carrinho!`);
  };

  return (
    <div className="product-card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="product-info">
        <span className="product-tag">{props.tag}</span>
        <h3>{props.title}</h3>
        <p className="product-description">{props.description}</p>
        <div className="product-price-btn">
          <span className="product-price">{formatPrice(props.price)}</span>
          <button className="btn-buy" onClick={handleBuyClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard