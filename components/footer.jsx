import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-blue-800 py-6 text-white mt-8">
      <div className="container mx-auto max-w-[85%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 lg:gap-20">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h2 className=" font-semibold text-[1.2rem]">About Us</h2>
            <p className="font-light text-[0.9rem] pr-0 md:pr-6 lg:pr-0">
              Your trusted partner for hassle-free loans. With transparent processes and quick approvals, we empower your financial journey. Simplify borrowing with Easy Capital today.
            </p>
            <div className="flex mt-4 items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559145197050"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl h-6" />
              </a>
              <a
                href="https://x.com/CapitaEasy"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white text-xl h-6" />
              </a>
              <a
                href="https://www.instagram.com/easycapital.official/"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-xl h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC-0Db-fBEk46ipnMIzxOAfw"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer bg-[#fff] bg-opacity-20 w-[3rem] h-[3rem] rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-white text-xl h-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className=" font-semibold text-[1.2rem]">Our Products</h2>
            <ul className="font-light text-[0.9rem] flex flex-col gap-2">
              <li>
                <Link href="/business-loan/unsecured-business-loan">Business Loan</Link>
              </li>
              <li>
                <Link href="/gst-services/gst-registration">GST Services</Link>
              </li>
              <li>
                <Link href="/registration-services/udhyam-certificate">Registration services</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className=" font-semibold text-[1.2rem]">Company</h2>
            <ul className="font-light text-[0.9rem] flex flex-col gap-2">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h2 className=" font-semibold text-[1.2rem]">Have any questions?</h2>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl h-10" />
              <p className="font-light text-[0.9rem]">
                Maruti Industrial Development Area, Plot 23, Sector 18, Gurugram, Haryana 122015
              </p>
            </div>
            <a
              href="tel:+918745945682"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="text-white text-xl h-6" />
              <p className="font-light text-[0.9rem]">+91 87459 45682</p>
            </a>
            <a
              href="mailto:support@easycapital.co.in"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-4 cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl h-6" />
              <p className="font-light text-[0.9rem] break-words">support@easycapital.co.in</p>
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="font-light text-[1rem]">Copyright ©2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
