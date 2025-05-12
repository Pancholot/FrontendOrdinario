import React, { useState, useEffect } from "react";

const Card = ({ product, setShoppingCart }) => {
  const [quantity, setQuantity] = useState(0);

  const { imagenUrl, nombre, precio, cantidad, sku } = product;

  useEffect(() => {
    setShoppingCart((prev) => {
      if (prev[sku] === quantity) return prev;
      if (quantity === 0) {
        const updated = { ...prev };
        delete updated[sku];
        return updated;
      }
      return {
        ...prev,
        [sku]: quantity,
      };
    });
  }, [quantity]);

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => (prev < cantidad ? prev + 1 : prev));
  };

  const handleInputChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(value > cantidad ? cantidad : value);
  };

  return (
    <div className="w-full max-w-sm rounded-lg shadow-sm bg-[#1f618d] flex flex-col justify-between">
      <div className="h-72 flex items-center justify-center p-8">
        <img
          className="rounded-[15%] object-contain max-h-full max-w-full"
          src={imagenUrl}
          alt={nombre}
        />
      </div>

      <div className="px-5 pb-5 flex flex-col items-center">
        <h5 className="text-2xl text-center font-bold tracking-tight text-white mb-4">
          {nombre}
        </h5>
        <span className="text-xl text-center font-bold text-white mb-3">
          ${precio}
        </span>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleDecrease}
            className="text-white bg-red-400 hover:bg-red-600 cursor-pointer font-medium rounded-lg text-sm p-4"
          >
            <img
              src="/assets/menos.png"
              alt="Menos"
              className="w-4 h-4 invert"
            />
          </button>
          <input
            type="number"
            min={0}
            max={cantidad}
            value={quantity}
            onChange={handleInputChange}
            className="w-14 text-center border rounded-md"
          />
          <button
            onClick={handleIncrease}
            className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer font-medium rounded-lg text-sm p-4"
          >
            <img
              src="/assets/anadir.png"
              alt="Más"
              className="w-4 h-4 invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
