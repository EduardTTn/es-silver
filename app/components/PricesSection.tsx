import { 
    FaHandshake, 
    FaBuilding, 
    FaGavel, 
    FaTasks, 
    FaCalendarAlt, 
    FaSitemap, 
    FaFileInvoiceDollar 
  } from 'react-icons/fa';
  import { IoLocationSharp, IoDocumentTextSharp } from 'react-icons/io5';
  import { MdWork, MdUpdate } from 'react-icons/md';
  
  const PricesSection = () => {
    const services = [
      { title: "Înființare SRL", price: "250 RON + Taxa ONRC", icon: <MdWork /> },
      { title: "Înființare SRL-D / PFA / ÎI", price: "250 RON", icon: <FaHandshake /> },
      { title: "Găzduire sediu social", price: "500 RON / 12 luni", icon: <IoLocationSharp /> },
      { title: "Radiere SRL / SRL-D", price: "500 RON + Taxa ONRC", icon: <FaGavel /> },
      { title: "Radiere PFA / ÎI", price: "250 RON", icon: <FaTasks /> },
      { title: "Deschidere / Radiere punct de lucru", price: "400 RON + Taxa", icon: <FaFileInvoiceDollar /> },
      { title: "Prelungire durată funcționare firmă", price: "400 RON + Taxa", icon: <FaCalendarAlt /> },
      { title: "Prelungire durată sediu social / punct de lucru", price: "400 RON", icon: <IoLocationSharp /> },
      { title: "Suspendare / Reluare activitate", price: "400 RON + Taxa", icon: <MdUpdate /> },
      { title: "Schimbare cod CAEN principal", price: "400 RON + Taxa", icon: <FaSitemap /> },
      { title: "Schimbare sediu social", price: "400 RON + Taxa", icon: <FaBuilding /> },
      { title: "Schimbare denumire societate", price: "400 RON + Taxa", icon: <IoDocumentTextSharp /> },
    ];
  
    return (
      <section
        id="prices"
        className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 px-6 lg:px-20 py-16 text-gray-800"
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-12">Prețuri</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed">
                {service.price.split(/(\s|\+|\/)/).map((part, idx) => (
                  <span key={idx} className="text-gray-700 font-bold">
                    {part}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PricesSection;
  