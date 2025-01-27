import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faMoneyBillWave, faShieldAlt, faHandshake, faMobileAlt, faClock } from '@fortawesome/free-solid-svg-icons';

export default function WhyEasyCapital() {
  const features = [
    { icon: faClock, text: 'Quick Application Process' },
    { icon: faRocket, text: 'Rapid Disbursement' },
    { icon: faMoneyBillWave, text: 'Flexible Repayment Plans' },
    { icon: faMobileAlt, text: 'Paperless and Hassle-Free' },
    { icon: faShieldAlt, text: 'Secure and Reliable' },
    { icon: faHandshake, text: 'Trusted by Many' },
  ];

  return (
    // <div className="bg-blue-800 my-3">
    <div className="bg-blue-800">
      <div className="py-10 md:py-10 mx-auto max-w-[85%]">
        <div className="flex items-center justify-around gap-10 flex-col md:flex-row md:space-y-8">
          <h3 className="text-white text-3xl text-[1.5rem] font-extrabold md:text-5xl mb-6 lg:mb-0 text-center ">
            Why Choose EasyCapital?
          </h3>
          <div className="grid gap-x-8 gap-y-14 grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col text-center sm:flex-row sm:text-start items-center gap-3">
                <div className="min-w-16 md:min-w-12 flex items-center justify-center h-16 bg-white rounded-lg md:h-12 shadow-md">
                  <FontAwesomeIcon icon={item.icon} className="text-black h-6" />
                </div>
                <p className="text-sm text-white font-normal md:text-lg md:leading-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
