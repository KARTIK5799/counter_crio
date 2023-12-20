import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Counter App</h1>
        <h2 className="text-lg  mb-4 text-center">Count: {count}</h2>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleIncrease}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrease}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
