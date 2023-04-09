import React from "react";

function Coin({ name, image, symbol, price, priceChange }) {
  return (
    <div className="coin-row">
      <div className="coin">
        <img src={image} alt="crypto" />
        <h2 className="coinnameh2">{name}</h2>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <div className="coin-data">
        <p className="coin-price">{price}$</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </div>
    </div>
  );
}

export default Coin;
