import React, { useState } from 'react';

const navigation = [
  { name: 'Game', href: '#gamepage' },
  { name: 'Characters', href: '/#characters' },
  { name: 'World', href: '/#world' },
  { name: 'Gameplay', href: '/#gameplay' },
  { name: 'Concept Art', href: '/#conceptart' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2 bg-black opacity-90">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 sticky top-20">
        <div className="relative flex h-16 items-center justify-between">
          <a href="/#" className="font-serif text-6xl text-white font-semibold">
            <img
              src="https://drive.google.com/uc?export=view&id=1OJ88ItWNGaIw5L-g-JdiJ1p0RHKeTXCf"
              className="w-60 h-auto"
              alt="Nier Icon"
            />
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block text-4xl text-white hover:text-NieR focus:outline-none"
            >
              ☰
            </button>
          </div>
          <div className="hidden lg:flex space-x-8 lg:space-x-4 lg:block">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-2xl text-white hover:text-NieR"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <ul className="mt-2 space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-2xl text-white hover:text-NieR"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
