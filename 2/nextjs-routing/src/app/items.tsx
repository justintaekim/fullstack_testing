// src/app/items.tsx
import { useEffect, useState } from "react";
import Link from "next/link";

const Items: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Items Page</h1>
      <nav>
        <ul className="space-y-2 mb-4">
          <li>
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="bg-white p-4 rounded shadow-md w-96">
        {items.map((item, index) => (
          <li key={index} className="border-b last:border-0 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
