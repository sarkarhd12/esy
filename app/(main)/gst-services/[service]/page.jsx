"use client";
import OTPVerification from "@/components/ApplyComponents/OTPVerification";
import BasicContactForm from "@/components/GstComponents/BasicContactForm";
import GSTOverview from "@/components/GstComponents/GSTOverview";
import SuccessMessage from "@/components/SuccessMessage";
import React, { useState, use } from "react";

const GstPage = ({ params }) => {
  const resolvedParams = use(params);
  const { service } = resolvedParams;
  const [step, setStep] = useState(1);
  const [orderDetails, setOrderDetails] = useState({})
  const [gstId, setGstId] = useState("")

  const nextStep = () => {
    setStep(step + 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicContactForm service={service} nextStep={nextStep} setOrderDetails={setOrderDetails} setGstId={setGstId} />;;
      case 2:
        return <OTPVerification nextStep={nextStep} orderDetails={orderDetails} />;
      case 3:
        return <SuccessMessage verificationMessage={"We will get back to you shortly."} gstId={gstId} />;
      default:
        return <BasicContactForm />;
    }
  };

  return (
    <div className="max-w-[90vw] mx-auto flex flex-col justify-center items-center gap-6 my-10">
      {/* Stepper Component */}
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          className={`flex md:w-full items-center ${step >= 1 ? "text-blue-600 dark:text-blue-500" : ""
            } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">

            {step > 1 ? (<svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>) :
              (<span className="me-2">1.</span>)
            }
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li
          className={`flex md:w-full items-center ${step >= 2 ? "text-blue-600 dark:text-blue-500" : ""
            } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {step > 2 ? (<svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>) :
              (<span className="me-2">2.</span>)
            }
            OTP <span className="hidden sm:inline-flex sm:ms-2">Verification</span>
          </span>
        </li>
        <li
          className={`flex items-center ${step >= 3 ? "text-blue-600 dark:text-blue-500" : ""
            }`}
        >
          <span className="me-2">3.</span>
          Done
        </li>
      </ol>

      {renderStep()}
      <GSTOverview />
    </div>
  );
};

export default GstPage;
