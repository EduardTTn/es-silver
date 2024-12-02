import React from 'react';

const LandingSection = () => {
  return (
    <section
      id="landing"
      className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800 px-4 sm:px-6 lg:px-20 py-16 flex flex-col items-center"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center animate-fade-in-down">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-4">
          Deschide-ți afacerea 100% online cu ES Silver
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
          Rapid, simplu și fără bătăi de cap. Înființare SRL / SRL-D / PFA complet online, cu documente gata în cel mai scurt timp!
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 animate-fade-in">
          <a
            href="#prices"
            className="px-6 py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Vezi Prețuri
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm sm:text-lg font-semibold text-blue-600 bg-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-100 transition-all transform hover:scale-105"
          >
            Contactează-ne
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl">
        <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in-left">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Consultanță Gratuită 24/7
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Suntem mereu la dispoziția ta pentru orice întrebări sau clarificări.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in-up">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Cele Mai Mici Prețuri
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Servicii premium la un cost accesibil. Înființare SRL cu doar 250 RON!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md animate-slide-in-right">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Găzduire Sediu Social
          </h3>
          <p className="text-sm sm:text-base text-gray-700">
            Adresă comercială în peste 40 de locații din România, doar 500 RON/an.
          </p>
        </div>
      </div>

{/* BONUS Section */}
<div className="mt-12 max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 rounded-lg shadow-md">
  <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-6 text-center">
    BONUSURI pentru clienții ES Silver
  </h3>
  <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
    <li className="flex flex-wrap items-start">
      <span className="text-green-600 font-bold mr-2 shrink-0">+ BONUS:</span>
      <div>
        <span>După înființarea societății primești&nbsp;</span>
        <strong>GHIDUL ÎNCEPĂTORULUI</strong>
        <span>&nbsp;pentru o afacere de succes de la primul pas.</span>
      </div>
    </li>
    <li className="flex flex-wrap items-start">
      <span className="text-green-600 font-bold mr-2 shrink-0">+ BONUS:</span>
      <div>Ofertă personalizată pentru serviciile de contabilitate.</div>
    </li>
    <li className="flex flex-wrap items-start">
      <span className="text-green-600 font-bold mr-2 shrink-0">+ BONUS:</span>
      <div>Îndrumări de la consultanții noștri cu experiență de peste 5 ani în domeniu.</div>
    </li>
    <li className="flex flex-wrap items-start">
      <span className="text-green-600 font-bold mr-2 shrink-0">+ BONUS:</span>
      <div>Găzduire sediu social în peste 40 de locații.</div>
    </li>
    <li className="flex flex-wrap items-start">
      <span className="text-green-600 font-bold mr-2 shrink-0">+ BONUS:</span>
      <div>Reduceri speciale pentru clienții care aleg să colaboreze cu noi.</div>
    </li>
  </ul>
</div>

    </section>
  );
};

export default LandingSection;
