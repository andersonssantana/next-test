'use client';

import { useState } from 'react';

interface TextFieldWithCounterProps {
  label: string;
}

export default function TextFieldWithCounter({ label }: TextFieldWithCounterProps) {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
        <label htmlFor="textField" className="text-sm font-medium">
          {label}
        </label>
        <input
          id="textField"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          placeholder="Type something..."
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}
