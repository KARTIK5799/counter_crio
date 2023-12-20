import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
   if(count!=0){
    setCount(count - 1);
   }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-10 bg-gray-100 border rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-center">Count: {count}</h1>
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
  );
};

export default Counter;

