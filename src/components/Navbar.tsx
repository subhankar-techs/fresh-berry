import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🫐</span>
              </div>
              <span className="font-bold text-gray-800">Blue Berry</span>
            </div>
            <select className="bg-transparent border-none text-gray-600">
              <option>Vegetables</option>
            </select>
            <div className="flex-1 max-w-md w-full">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            <div className="flex flex-wrap items-center space-x-4 md:space-x-8">
              <div className="text-blue-600">☰</div>
              <button className="text-gray-700 hover:text-blue-600">Home</button>
              <div 
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="text-gray-700 hover:text-blue-600 flex items-center">
                  Categories <span className="ml-1">▼</span>
                </button>
                {showDropdown && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border rounded-lg py-2 w-48 z-50">
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Fruits</button>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Vegetables</button>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Snacks</button>
                  </div>
                )}
              </div>
              <button className="text-gray-700 hover:text-blue-600">Products</button>
              <button className="text-gray-700 hover:text-blue-600">Pages</button>
              <button className="text-gray-700 hover:text-blue-600">Blog</button>
              <button className="text-blue-600">🏷️ Offers</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}