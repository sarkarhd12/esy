import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// const HeroSection = () => {
//     return (
//         <section className="container px-6 py-7 mx-auto">
//             <div className="grid items-center gap-8 lg:grid-cols-2">
//                 {/* Left Side - Text Section */}
//                 <div className="text-center lg:text-left lg:pl-10">
//                     <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
//                         Empowering Your Business with Easy Capital Solutions
//                     </h1>
//                     <p className="mt-6 text-gray-500">
//                         Get access to the financial support your business needs to grow. Whether you&apos;re an MSME or an aspiring entrepreneur, we&apos;re here to help.
//                     </p>

//                     <Link href="/apply">
//                         <button className="px-5 py-3 mt-6 ml-4 text-sm font-medium leading-5 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
//                             Apply for Loan Today
//                         </button>
//                     </Link>
//                     <p className="mt-3 text-sm text-gray-400">Quick approval, no hidden fees</p>
//                 </div>

//                 {/* Right Side - Image Section */}
//                 <div className="flex justify-center">
//                     <Image
//                         className="object-cover w-full h-auto max-w-lg rounded-xl lg:max-w-2xl"
//                         src="/images/Hero.avif"
//                         alt="Business Growth"
//                         width={1000}
//                         height={600}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;


const HeroSection = () => {
    return (
        <section className="container px-6 py-8 mx-auto mb-4"> 
            <div className="grid items-center gap-8 lg:grid-cols-2">
                {/* Left Side - Text Section */}
                <div className="text-center lg:text-left lg:pl-10">
                    <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                        Empowering Your Business with Easy Capital Solutions
                    </h1>
                    <p className="mt-6 text-gray-500">
                        Get access to the financial support your business needs to grow. Whether you&apos;re an MSME or an aspiring entrepreneur, we&apos;re here to help.
                    </p>

                    <Link href="/apply">
                        <button className="px-5 py-3 mt-6 ml-4 text-sm font-medium leading-5 text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
                            Apply for Loan Today
                        </button>
                    </Link>
                    <p className="mt-3 text-sm text-gray-400">Quick approval, no hidden fees</p>
                </div>

                {/* Right Side - Image Section */}
                <div className="flex justify-center">
                    <Image
                        className="object-cover w-full h-auto max-w-lg rounded-xl lg:max-w-2xl"
                        src="/images/Hero.avif"
                        alt="Business Growth"
                        width={1000}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
