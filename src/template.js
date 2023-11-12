import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/outline';
import Navbar from './nav'
import Navbar2 from './nav2'
import Footer from './footer'

const LandingPage = () => {
  const backgroundImageUrl = 'https://techweargiants.com/cdn/shop/collections/summer-sale-600442_1296x.jpg?v=1684959045';
  const backgroundImageUrl2 = 'https://techweargiants.com/cdn/shop/files/Untitled_design_17_1728x.png?v=1684963084';

  const hero1 = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };
  const hero2 = {
    backgroundImage: `url(${backgroundImageUrl2})`,
  };

  return (
    <div className="bg-white ">
      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      {/* Main Content */}
      <section>
        <div className="relative inset-0">
          <video className="w-full h-full object-cover " autoPlay loop playsInlinedata-v-392c3be8="" playsinline="" webkit-playsinline="" x5-playsinline=""
            x-webkit-airplay="allow" x5-video-orientation="portraint" x5-video-player-type="h5"
            x5-video-player-fullscreen="true" autobuffer="" preload="auto"
            controlslist="nodownload" src="https://drive.google.com/uc?export=download&id=1sNh1l6mDAAsG2F-BKBJwDOtqANr5ufAy"
          ></video>
        </div>

      </section>
      <section>
        <div style={hero1} className="bg-cover bg-center h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <button class="bg-darkgrey font-serif text-4xl text-white p-4 rounded hover:bg-white hover:text-darkgrey">
              <a href="/Product">Shop Now </a></button>
          </div>
        </div>
      </section>
      <Navbar2 />
      {/* Best Seller Content */}
      <section className="mx-auto py-5 max-w-fit">
        <h2 className="m-auto py-10 max-w-xl text-center text-3xl font-bold">
          Best Sellers
        </h2>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">
          {/* Kartu pertama */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg zoom overflow-hidden rounded-lg bg-cover bg-no-repeat dark:shadow-black/20 bg-[50%] ">
            <img
              src="https://techweargiants.com/cdn/shop/files/HOUZHOU-Techwear-Men-s-Sets-Cargo-Pants-Men-s-Shirt-Kit-Long-Sleeve-Shirts-Korean-Streetwear_jpg_Q90_jpg_360x360.webp?v=1685749988"
              className="w-full hover:brightness-50 h-64 align-middle transition duration-300 ease-linear"
            />
            <a href="#">
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">
                  Elegant Endeavor Black And White Suit Set
                </div>
                <p className="text-gray-700 text-base">
                  Deskripsi singkat tentang kartu ini. Anda dapat menambahkan teks lebih lanjut di sini sesuai kebutuhan.
                </p>
              </div>
            </a>
          </div>
          {/* Kartu kedua */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat dark:shadow-black/20 bg-[50%] mx-auto">
            <img
              src="https://techweargiants.com/cdn/shop/products/giants-limited-stock-rider-jacket-with-carrying-system-872853_360x360.jpg?v=1683302609"
              className="w-full hover:brightness-50 h-64 align-middle transition duration-300 ease-linear"
            />
            <a href="#">
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">
                  Elegant Endeavor Black And White Suit Set
                </div>
                <p className="text-gray-700 text-base">
                  Deskripsi singkat tentang kartu ini. Anda dapat menambahkan teks lebih lanjut di sini sesuai kebutuhan.
                </p>
              </div>
            </a>
          </div>
          {/* Kartu ketiga */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat dark:shadow-black/20 bg-[50%] mx-auto">
            <img
              src="https://techweargiants.com/cdn/shop/files/Reindee-Lusion-22FW-0188-Urban-Function-Waterproof-jumper-dwr-coating-hidden-molle-quick-disassembly-techwear-gorpcore.jpg_Q90.jpg__4_360x360.webp?v=1685088405"
              className="w-full hover:brightness-50 h-64 align-middle transition duration-300 ease-linear"
            />
            <a href="#">
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">
                  Elegant Endeavor Black And White Suit Set
                </div>
                <p className="text-gray-700 text-base">
                  Deskripsi singkat tentang kartu ini. Anda dapat menambahkan teks lebih lanjut di sini sesuai kebutuhan.
                </p>
              </div>
            </a>
          </div>
          {/* Kartu keempat */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat dark:shadow-black/20 bg-[50%] mx-auto">
            <img
              src="https://techweargiants.com/cdn/shop/products/luxury-style-giants-perfect-aesthetic-limited-trainers-794546_720x714.jpg?v=1683302654"
              className="w-full hover:brightness-50 h-64 align-middle transition duration-300 ease-linear"
            />
            <a href="#">
              <div className="px-6 py-4 items-center">
                <div className="font-bold text-xl mb-2">
                  Elegant Endeavor Black And White Suit Set
                </div>
                <p className="text-gray-700 text-base">
                  Deskripsi singkat tentang kartu ini. Anda dapat menambahkan teks lebih lanjut di sini sesuai kebutuhan.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="py-12 text-center   ">
          <a href='#BestSeller'>
            <button class="bg-white px-6 py-2 text-2xl text-darkgrey rounded hover:bg-darkgrey hover:text-white border-2">View All
            </button></a>
        </div>
      </section>

      {/* Main Content 3 */}
      <section>
        <div style={hero2} className="bg-cover bg-center h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <button class="bg-darkgrey font-serif text-4xl text-white p-4 rounded hover:bg-white hover:text-darkgrey">
              <a href="/Product">Shop Now </a></button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
