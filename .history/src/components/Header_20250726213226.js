import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gradient-to-r from-red-800 to-blue-800 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition-colors duration-200">
          Vendetta
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg hover:text-gray-200 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-gray-200 transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link href="/support" className="text-lg hover:text-gray-200 transition-colors duration-200">Support Us</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-gray-200 transition-colors duration-200">Contact Us</Link>
            </li>
            {/* We'll add login/signup later */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;