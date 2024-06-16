// src/app/page.tsx
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className="text-blue-500 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/items" className="text-blue-500 hover:underline">
              Items
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
