import React from 'react';
import './Card.css';

const Card = ({ currencyType, name, image, price, discount }) => {
  // Calculate the discounted price and percentage
  const realPrice = price;
  const discountedPrice = ((1 - discount / 100) * price).toFixed(2);
  const discountedPercentage = Math.round(discount);

  // Determine the currency symbol based on the currencyType prop
  let currencySymbol = "";
  switch (currencyType) {
    case "dollars":
      currencySymbol = "$";
      break;
    case "rupees":
      currencySymbol = "₹";
      break;
    default:
      currencySymbol = "$";
  }

  return (
    <div className="card">
      {/* Price information and discount percentage */}
      <div className="price-info">
        <span className="real-price">{currencySymbol + " " + realPrice}</span>
        <span className="discount-circle">-{discountedPercentage}%</span>
      </div>

      {/* Image */}
      <img src={image} alt={name} />

      {/* Product name */}
      <h3>{name}</h3>

      {/* Discounted price */}
      <p>{currencySymbol + " " + discountedPrice}</p>
    </div>
  );
};

export default Card;
