// "use client";
// import React, { useState, useEffect, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import autoplay from 'embla-carousel-autoplay';

// const testimonials = [
//     {
//         quote: `"As a small business owner, securing a loan can be a daunting task. Easy Capital made it simple and stress-free. The platform allowed me to compare rates from various RBI-approved lenders, and I found a great deal that suited my business's needs. The customer service was exceptional, guiding me through each step of the process. I couldn't be happier with my experience!"`,
//         name: 'Arvind Shah',
//         location: 'Bihar, India'
//     },
//     {
//         quote: `"I was looking for a loan to expand my manufacturing business, but I didn't know where to start. Easy Capital came to the rescue. The platform was easy to use, and I appreciated the range of options from reputable NBFCs and banks. The team at Easy Capital provided excellent advice, helping me choose the best loan for my business. Thanks to them, my business is now thriving."`,
//         name: 'Eashan',
//         location: 'Bihar, India'
//     },
//     {
//         quote: `"Easy Capital is a game-changer! I was struggling to find a loan that matched my business's growth plans, but with Easy Capital, I could easily compare multiple offers from trusted lenders. Their transparent approach and focus on RBI-approved financial institutions gave me peace of mind. The application process was quick and efficient, and I received my loan in record time."`,
//         name: 'Pratap Kumar Roy',
//         location: 'Telangana, India'
//     },
//     {
//         quote: `"After searching for weeks to secure a business loan, I stumbled upon Easy Capital, and I'm so glad I did. The platform made comparing loans from different banks and NBFCs straightforward, and the customer support team was always ready to assist. With their help, I got the perfect loan to renovate my restaurant. I highly recommend Easy Capital to any business owner looking for reliable loan options."`,
//         name: 'Prakash S',
//         location: 'Uttar Pradesh, India'
//     },
// ];


// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 2500 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on('select', onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     return (
//         <section className="bg-gradient-to-tr from-blue-50 to-blue-200 ">
//             <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
//                 <h2 className="text-5xl font-bold text-blue-600 mb-4">Success Stories</h2>
//                 <p className="mb-8 text-lg text-gray-700">
//                     Here are few stories from our satisfied clients who have successfully secured loans with us.
//                 </p>

//                 <div className="embla" ref={emblaRef}>
//                     <div className="embla__container">
//                         {testimonials.map((testimonial, index) => (
//                             <div className="embla__slide" key={index}>
//                                 <figure className="max-w-screen-md mx-auto cursor-default bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//                                     <svg className="h-12 mx-auto mb-3 text-blue-500" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
//                                     </svg>
//                                     <blockquote>
//                                         <p className="text-lg md:text-2xl font-medium text-gray-900">{testimonial.quote}</p>
//                                     </blockquote>
//                                     <figcaption className="flex items-center justify-center mt-6 space-x-3">
//                                         <div className="pr-3 font-semibold text-gray-900 border-r border-gray-400">{testimonial.name}</div>
//                                         <div className=" text-sm text-gray-500">{testimonial.location}</div>
//                                     </figcaption>
//                                 </figure>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="embla__dots mt-8">
//                     {testimonials.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
//                             onClick={() => emblaApi && emblaApi.scrollTo(index)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                     width: 100%;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     min-width: 100%;
//                     padding: 1rem;
//                 }
//                 .embla__dots {
//                     display: flex;
//                     justify-content: center;
//                 }
//                 .embla__dot {
//                     width: 12px;
//                     height: 12px;
//                     border-radius: 50%;
//                     margin: 0 0.5rem;
//                     background-color: #cbd5e1;
//                     cursor: pointer;
//                     transition: background-color 0.3s;
//                 }
//                 .embla__dot.is-selected {
//                     background-color: #1e3a8a;
//                 }
//                 .embla__dot:hover {
//                     background-color: #4f46e5;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Testimonials;



// "use client";
// import React, { useState, useEffect, useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import autoplay from 'embla-carousel-autoplay';


// const testimonials = [
//     {
//         quote: `"I applied for an unsecured business loan through Easy Capital and was amazed by the quick approval process. The team was incredibly supportive, answering all my queries promptly. Their professional approach made the experience smooth and hassle-free. Highly recommend their services for anyone in need of financial assistance!"`,
//         name: 'Rajesh Kumar',
//         location: 'Bhopal, Madhya Pradesh'
//     },
//     {
//         quote: `"I received my MSME loan from Easy Capital much faster than I expected, thanks to their efficient team. They guided me throughout the process and ensured all my documents were in order. Their support was invaluable, making my experience smooth and stress-free. Highly recommended for MSME financing!"`,
//         name: 'Anjali Singh',
//         location: 'Indore, Madhya Pradesh'
//     },
//     {
//         quote: `"The line of credit service at Easy Capital was exactly what my business needed. The process was quick and transparent, with no hidden charges. The team walked me through every step, ensuring I understood the terms clearly. I highly recommend them for anyone needing financial flexibility!"`,
//         name: 'Priya Patil',
//         location: 'District: Pune, Maharashtra'
//     },
//     {
//         quote: `"I took out a secured business loan with Easy Capital, and the interest rates were very competitive compared to other lenders. The entire application process was straightforward, and their customer service was outstanding. I felt supported at every stage. Highly recommend for business financing!"`,
//         name: 'Amit Deshmukh',
//         location: 'Nagpur, Maharashtra'
//     },
//     {
//         quote: `"Thanks to Easy Capital's machinery loan service, we successfully upgraded our production equipment. The process was seamless, and their team provided excellent support. They understood our requirements and helped us choose the right financing option. Highly satisfied with the service and results!"`,
//         name: 'Sanjay Joshi',
//         location: 'Nashik, Maharashtra'
//     },
//     {
//         quote: `"The business loan for women program at Easy Capital empowered me to start my e-commerce venture. The application process was efficient, and their team provided guidance throughout. I appreciated their commitment to supporting women entrepreneurs. Highly recommend this service for aspiring businesswomen!"`,
//         name: 'Neha Rao',
//         location: 'Thane, Maharashtra'
//     },
//     {
//         quote: `"My experience with GST registration through Easy Capital was smooth and hassle-free. The team was knowledgeable and answered all my questions promptly. They guided me through the entire process, ensuring I had all the necessary documentation. I would highly recommend their services for anyone needing GST assistance!"`,
//         name: 'Rahul Verma',
//         location: 'Lucknow, Uttar Pradesh'
//     },
//     {
//         quote: `"I was impressed with Easy Capital's GST filing service. The team was professional and organized, making the entire process seamless. They ensured all my documents were accurate and submitted on time. I highly recommend them for anyone looking for reliable GST support!"`,
//         name: 'Sneha Gupta',
//         location: 'Kanpur, Uttar Pradesh'
//     },
//     {
//         quote: `"Their service for GST annual returns at Easy Capital was thorough and efficient. I appreciated how they took the time to explain the process and ensured everything was in order. Their attention to detail and professionalism made a potentially stressful task much easier. Highly recommend!"`,
//         name: 'Vikram Singh',
//         location: 'Agra, Uttar Pradesh'
//     },
//     {
//         quote: `"Cancelling my GST registration was made easy with Easy Capital's expert help. They guided me through the necessary steps and ensured I had all the required documents ready. The service was quick and efficient. I highly recommend them for any GST-related assistance!"`,
//         name: 'Pooja Sharma',
//         location: 'Varanasi, Uttar Pradesh'
//     },
//     {
//         quote: `"The Udhyam certificate process with Easy Capital was straightforward, and I received my certificate quickly. The team was very supportive, answering all my queries and guiding me through the documentation. Their efficiency and professionalism made the entire experience smooth. I highly recommend their services for MSMEs!"`,
//         name: 'Rohit Kumar',
//         location: 'Patna, Bihar'
//     },
//     {
//         quote: `"Registering for FSSAI with Easy Capital was a breeze thanks to their excellent assistance. They explained the entire process clearly and helped me gather the necessary documents. I was impressed by their professionalism and prompt responses. I highly recommend their services for anyone needing food business registration!"`,
//         name: 'Manisha Rani',
//         location: 'Gaya, Bihar'
//     },
//     {
//         quote: `"The halal registration service from Easy Capital was outstanding. They guided me through each step and made the process incredibly simple. Their team was knowledgeable and responsive, addressing all my concerns promptly. I couldn’t have done it without their help. Highly recommend for halal certification!"`,
//         name: 'Amit Yadav',
//         location: 'Bhagalpur, Bihar'
//     },
//     {
//         quote: `"Obtaining my trade license was easy with Easy Capital's professional assistance. They handled all the paperwork and ensured I had everything in order. Their prompt communication and guidance throughout the process made it stress-free. I highly recommend their services for any business licensing needs!"`,
//         name: 'Shweta Menon',
//         location: 'Bangalore, Karnataka'
//     },
//     {
//         quote: `"The Startup India program provided by Easy Capital gave me the support I needed to launch my business. Their team was knowledgeable and helped me navigate the process smoothly. I appreciated their commitment to startups and the resources they offered. Highly recommend for aspiring entrepreneurs!"`,
//         name: 'Karthik Nair',
//         location: 'Hubballi (Hubli), Karnataka'
//     },
//     {
//         quote: `"I had a great experience obtaining a business loan through Easy Capital. The team was very professional, and the application process was quick and straightforward. They guided me through every step, ensuring I understood everything. I highly recommend them for business financing!"`,
//         name: 'Divya Reddy',
//         location: 'Bangalore, Karnataka'
//     },
//     {
//         quote: `"Easy Capital's line of credit options provided the flexibility my business needed. The application process was quick, and their team was very supportive in explaining the terms. I felt valued as a client, and their service exceeded my expectations. Highly recommend for financial support!"`,
//         name: 'Vijay Kumar',
//         location: 'Mysuru (Mysore), Karnataka'
//     },
//     {
//         quote: `"I was very satisfied with the secured business loan service from Easy Capital. The process was efficient, and the interest rates were competitive. Their team was incredibly helpful in answering my questions and guiding me through the documentation. I would definitely recommend their services!"`,
//         name: 'Nisha Iyer',
//         location: 'Bangalore, Karnataka'
//     },
//     {
//         quote: `"The assistance I received with my GST filing from Easy Capital was top-notch. The team was organized and made sure everything was submitted accurately and on time. I felt relieved knowing they were handling my GST requirements. Highly recommend their services for reliable support!"`,
//         name: 'Suresh Bhat',
//         location: 'Bangalore, Karnataka'
//     },
//     {
//         quote: `"The machinery loan service from Easy Capital was a game-changer for my business. The team guided me through the entire process and helped me find the best financing options. I appreciate their professionalism and support. I highly recommend them for machinery financing!"`,
//         name: 'Ravi Prakash',
//         location: 'Mangalore, Karnataka'
//     }
// ];



// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 3000 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev();
//     }, [emblaApi]);

//     const scrollNext = useCallback(() => {
//         if (emblaApi) emblaApi.scrollNext();
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on("select", onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     return (
//         <section className="bg-gradient-to-tr from-blue-50 to-blue-200 py-1">
//             <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
//                 <h2 className="text-5xl font-bold text-blue-600 mb-4">Success Stories</h2>
//                 <p className="mb-8 text-lg text-gray-700">
//                     Here are few stories from our satisfied clients who have successfully secured loans with us.
//                 </p>

//                 <div className="relative">
//                     <div className="embla" ref={emblaRef}>
//                         <div className="embla__container">
//                             {testimonials.map((testimonial, index) => (
//                                 <div className="embla__slide" key={index}>
//                                     <figure className="max-w-screen-md mx-auto cursor-default bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//                                         <svg className="h-12 mx-auto mb-3 text-blue-500" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
//                                         </svg>
//                                         <blockquote>
//                                             <p className="text-lg md:text-2xl font-medium text-gray-900">{testimonial.quote}</p>
//                                         </blockquote>
//                                         <figcaption className="flex items-center justify-center mt-6 space-x-3">
//                                             <div className="pr-3 font-semibold text-gray-900 border-r border-gray-400">{testimonial.name}</div>
//                                             <div className="text-sm text-gray-500">{testimonial.location}</div>
//                                         </figcaption>
//                                     </figure>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Previous Button */}
//                     <button
//                         onClick={scrollPrev}
//                         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300 lg:left-8 lg:w-12 lg:h-12"
//                         aria-label="Previous"
//                     >
//                         ❮
//                     </button>

//                     {/* Next Button */}
//                     <button
//                         onClick={scrollNext}
//                         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300 lg:right-8 lg:w-12 lg:h-12"
//                         aria-label="Next"
//                     >
//                         ❯
//                     </button>
//                 </div>

//                 <div className="embla__dots mt-8">
//                     {testimonials.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
//                             onClick={() => emblaApi && emblaApi.scrollTo(index)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                     width: 100%;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     min-width: 100%;
//                     padding: 1rem;
//                 }
//                 .embla__dots {
//                     display: flex;
//                     justify-content: center;
//                 }
//                 .embla__dot {
//                     width: 12px;
//                     height: 12px;
//                     border-radius: 50%;
//                     margin: 0 0.5rem;
//                     background-color: #cbd5e1;
//                     cursor: pointer;
//                     transition: background-color 0.3s;
//                 }
//                 .embla__dot.is-selected {
//                     background-color: #1e3a8a;
//                 }
//                 .embla__dot:hover {
//                     background-color: #4f46e5;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Testimonials;


// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import autoplay from "embla-carousel-autoplay";

// const testimonials = [
//     { quote: `"I applied for an unsecured business loan through Easy Capital and was amazed by the quick approval process."`, name: "Rajesh Kumar", location: "Bhopal, Madhya Pradesh" },
//     { quote: `"I received my MSME loan from Easy Capital much faster than I expected, thanks to their efficient team."`, name: "Anjali Singh", location: "Indore, Madhya Pradesh" },
//     { quote: `"The line of credit service at Easy Capital was exactly what my business needed."`, name: "Priya Patil", location: "Pune, Maharashtra" },
//     { quote: `"I took out a secured business loan with Easy Capital, and the interest rates were very competitive."`, name: "Amit Deshmukh", location: "Nagpur, Maharashtra" },
//     { quote: `"Thanks to Easy Capital's machinery loan service, we successfully upgraded our production equipment."`, name: "Sanjay Joshi", location: "Nashik, Maharashtra" },
//     { quote: `"The business loan for women program at Easy Capital empowered me to start my e-commerce venture."`, name: "Neha Rao", location: "Thane, Maharashtra" },
//     { quote: `"My experience with GST registration through Easy Capital was smooth and hassle-free."`, name: "Rahul Verma", location: "Lucknow, Uttar Pradesh" },
//     { quote: `"I was impressed with Easy Capital's GST filing service."`, name: "Sneha Gupta", location: "Kanpur, Uttar Pradesh" },
//     { quote: `"The halal registration service from Easy Capital was outstanding."`, name: "Amit Yadav", location: "Bhagalpur, Bihar" },
// ];

// // Group testimonials into chunks of 3
// const chunkTestimonials = (array, size) =>
//     array.reduce((result, item, index) => {
//         const chunkIndex = Math.floor(index / size);
//         if (!result[chunkIndex]) result[chunkIndex] = [];
//         result[chunkIndex].push(item);
//         return result;
//     }, []);

// const groupedTestimonials = chunkTestimonials(testimonials, 3);

// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 3000 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev();
//     }, [emblaApi]);

//     const scrollNext = useCallback(() => {
//         if (emblaApi) emblaApi.scrollNext();
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on("select", onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     return (
//         <section className="bg-white py-8">
//             <div className="max-w-screen-xl px-4 mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-blue-600 mb-6">Success Stories</h2>
//                 <p className="mb-8 text-base text-gray-700">
//                     Hear what our satisfied clients have to say about our services.
//                 </p>

//                 <div className="relative">
//                     {/* Carousel */}
//                     <div className="embla" ref={emblaRef}>
//                         <div className="embla__container flex">
//                             {groupedTestimonials.map((group, index) => (
//                                 <div className="embla__slide w-full" key={index}>
//                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                         {group.map((testimonial, i) => (
//                                             <figure
//                                                 key={i}
//                                                 className="bg-white rounded-lg border border-gray-300 shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
//                                             >
//                                                 <svg
//                                                     className="h-8 mx-auto mb-2 text-blue-500"
//                                                     viewBox="0 0 24 27"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                                                         fill="currentColor"
//                                                     />
//                                                 </svg>
//                                                 <blockquote>
//                                                     <p className="text-sm md:text-base font-medium text-gray-800">
//                                                         {testimonial.quote}
//                                                     </p>
//                                                 </blockquote>
//                                                 <figcaption className="flex items-center justify-center mt-4 space-x-3">
//                                                     <div className="font-semibold text-gray-800">{testimonial.name}</div>
//                                                     <span className="text-xs text-gray-600">• {testimonial.location}</span>
//                                                 </figcaption>
//                                             </figure>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Navigation Buttons */}
//                     <button
//                         onClick={scrollPrev}
//                         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full border border-gray-300 shadow-lg p-3 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         aria-label="Previous"
//                     >
//                         ❮
//                     </button>
//                     <button
//                         onClick={scrollNext}
//                         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full border border-gray-300 shadow-lg p-3 text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         aria-label="Next"
//                     >
//                         ❯
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                     width: 100%;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     flex: 0 0 100%;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Testimonials;


"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import autoplay from "embla-carousel-autoplay";


const testimonials = [
    {
        quote: `"I applied for an unsecured business loan through Easy Capital and was amazed by the quick approval process. The team was incredibly supportive, answering all my queries promptly. Their professional approach made the experience smooth and hassle-free. Highly recommend their services for anyone in need of financial assistance!"`,
        name: 'Rajesh Kumar',
        location: 'Bhopal, Madhya Pradesh'
    },
    {
        quote: `"I received my MSME loan from Easy Capital much faster than I expected, thanks to their efficient team. They guided me throughout the process and ensured all my documents were in order. Their support was invaluable, making my experience smooth and stress-free. Highly recommended for MSME financing!"`,
        name: 'Anjali Singh',
        location: 'Indore, Madhya Pradesh'
    },
    {
        quote: `"The line of credit service at Easy Capital was exactly what my business needed. The process was quick and transparent, with no hidden charges. The team walked me through every step, ensuring I understood the terms clearly. I highly recommend them for anyone needing financial flexibility!"`,
        name: 'Priya Patil',
        location: 'District: Pune, Maharashtra'
    },
    {
        quote: `"I took out a secured business loan with Easy Capital, and the interest rates were very competitive compared to other lenders. The entire application process was straightforward, and their customer service was outstanding. I felt supported at every stage. Highly recommend for business financing!"`,
        name: 'Amit Deshmukh',
        location: 'Nagpur, Maharashtra'
    },
    {
        quote: `"Thanks to Easy Capital's machinery loan service, we successfully upgraded our production equipment. The process was seamless, and their team provided excellent support. They understood our requirements and helped us choose the right financing option. Highly satisfied with the service and results!"`,
        name: 'Sanjay Joshi',
        location: 'Nashik, Maharashtra'
    },
    {
        quote: `"The business loan for women program at Easy Capital empowered me to start my e-commerce venture. The application process was efficient, and their team provided guidance throughout. I appreciated their commitment to supporting women entrepreneurs. Highly recommend this service for aspiring businesswomen!"`,
        name: 'Neha Rao',
        location: 'Thane, Maharashtra'
    },
    {
        quote: `"My experience with GST registration through Easy Capital was smooth and hassle-free. The team was knowledgeable and answered all my questions promptly. They guided me through the entire process, ensuring I had all the necessary documentation. I would highly recommend their services for anyone needing GST assistance!"`,
        name: 'Rahul Verma',
        location: 'Lucknow, Uttar Pradesh'
    },
    {
        quote: `"I was impressed with Easy Capital's GST filing service. The team was professional and organized, making the entire process seamless. They ensured all my documents were accurate and submitted on time. I highly recommend them for anyone looking for reliable GST support!"`,
        name: 'Sneha Gupta',
        location: 'Kanpur, Uttar Pradesh'
    },
    {
        quote: `"Their service for GST annual returns at Easy Capital was thorough and efficient. I appreciated how they took the time to explain the process and ensured everything was in order. Their attention to detail and professionalism made a potentially stressful task much easier. Highly recommend!"`,
        name: 'Vikram Singh',
        location: 'Agra, Uttar Pradesh'
    },
    {
        quote: `"Cancelling my GST registration was made easy with Easy Capital's expert help. They guided me through the necessary steps and ensured I had all the required documents ready. The service was quick and efficient. I highly recommend them for any GST-related assistance!"`,
        name: 'Pooja Sharma',
        location: 'Varanasi, Uttar Pradesh'
    },
    {
        quote: `"The Udhyam certificate process with Easy Capital was straightforward, and I received my certificate quickly. The team was very supportive, answering all my queries and guiding me through the documentation. Their efficiency and professionalism made the entire experience smooth. I highly recommend their services for MSMEs!"`,
        name: 'Rohit Kumar',
        location: 'Patna, Bihar'
    },
    {
        quote: `"Registering for FSSAI with Easy Capital was a breeze thanks to their excellent assistance. They explained the entire process clearly and helped me gather the necessary documents. I was impressed by their professionalism and prompt responses. I highly recommend their services for anyone needing food business registration!"`,
        name: 'Manisha Rani',
        location: 'Gaya, Bihar'
    },
    {
        quote: `"The halal registration service from Easy Capital was outstanding. They guided me through each step and made the process incredibly simple. Their team was knowledgeable and responsive, addressing all my concerns promptly. I couldn’t have done it without their help. Highly recommend for halal certification!"`,
        name: 'Amit Yadav',
        location: 'Bhagalpur, Bihar'
    },
    {
        quote: `"Obtaining my trade license was easy with Easy Capital's professional assistance. They handled all the paperwork and ensured I had everything in order. Their prompt communication and guidance throughout the process made it stress-free. I highly recommend their services for any business licensing needs!"`,
        name: 'Shweta Menon',
        location: 'Bangalore, Karnataka'
    },
    {
        quote: `"The Startup India program provided by Easy Capital gave me the support I needed to launch my business. Their team was knowledgeable and helped me navigate the process smoothly. I appreciated their commitment to startups and the resources they offered. Highly recommend for aspiring entrepreneurs!"`,
        name: 'Karthik Nair',
        location: 'Hubballi (Hubli), Karnataka'
    },
    {
        quote: `"I had a great experience obtaining a business loan through Easy Capital. The team was very professional, and the application process was quick and straightforward. They guided me through every step, ensuring I understood everything. I highly recommend them for business financing!"`,
        name: 'Divya Reddy',
        location: 'Bangalore, Karnataka'
    },
    {
        quote: `"Easy Capital's line of credit options provided the flexibility my business needed. The application process was quick, and their team was very supportive in explaining the terms. I felt valued as a client, and their service exceeded my expectations. Highly recommend for financial support!"`,
        name: 'Vijay Kumar',
        location: 'Mysuru (Mysore), Karnataka'
    },
    {
        quote: `"I was very satisfied with the secured business loan service from Easy Capital. The process was efficient, and the interest rates were competitive. Their team was incredibly helpful in answering my questions and guiding me through the documentation. I would definitely recommend their services!"`,
        name: 'Nisha Iyer',
        location: 'Bangalore, Karnataka'
    },
    {
        quote: `"The assistance I received with my GST filing from Easy Capital was top-notch. The team was organized and made sure everything was submitted accurately and on time. I felt relieved knowing they were handling my GST requirements. Highly recommend their services for reliable support!"`,
        name: 'Suresh Bhat',
        location: 'Bangalore, Karnataka'
    },
    {
        quote: `"The machinery loan service from Easy Capital was a game-changer for my business. The team guided me through the entire process and helped me find the best financing options. I appreciate their professionalism and support. I highly recommend them for machinery financing!"`,
        name: 'Ravi Prakash',
        location: 'Mangalore, Karnataka'
    }
];


const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 2500 })]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isMediumOrSmall, setIsMediumOrSmall] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", onSelect);
        }
    }, [emblaApi, onSelect]);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumOrSmall(window.innerWidth <= 768);
        };

        handleResize(); // Check on component mount
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 text-center">
                <h2 className="text-5xl font-bold text-black mb-4">Success Stories</h2>
                <p className="mb-8 text-lg text-gray-700">
                    Here are a few stories from our satisfied clients who have successfully secured loans with us.
                </p>

                <div className="relative">
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container flex">
                            {testimonials.map((testimonial, index) => (
                                <div className="embla__slide flex-shrink-0" key={index}>
                                    <figure className="w-full max-w-md mx-auto bg-white shadow-lg border border-gray-300 p-6 h-[90%] flex flex-col justify-between rounded-xl fade-effect">
                                        <svg
                                            className="h-8 mx-auto mb-3 text-blue-500"
                                            viewBox="0 0 24 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <blockquote>
                                            <p className="text-sm font-medium text-gray-600">{testimonial.quote}</p>
                                        </blockquote>
                                        <figcaption className="flex items-center justify-center mt-4 space-x-3">
                                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!isMediumOrSmall && (
                        <>
                            <button
                                className="absolute top-1/2 left-[-50px] -translate-y-1/2 bg-gray-300 text-white p-3 rounded-full shadow-md hover:bg-gray-400 focus:outline-none transition"
                                onClick={scrollPrev}
                            >
                                ◀
                            </button>

                            <button
                                className="absolute top-1/2 right-[-50px] -translate-y-1/2 bg-gray-300 text-white p-3 rounded-full shadow-md hover:bg-gray-400 focus:outline-none transition"
                                onClick={scrollNext}
                            >
                                ▶
                            </button>
                        </>
                    )}
                </div>
            </div>

           
            <style jsx>{`
                .embla {
                    overflow: hidden;
                    width: 100%;
                }
                .embla__container {
                    display: flex;
                    flex-wrap: nowrap;
                }
                .embla__slide {
                    flex: 0 0 33.3333%; /* Adjusted for larger screens, takes 1/3 of the width */
                    padding: 1rem;
                }
                figure {
                    height: 400px;
                    width: 100%;
                    background-color: rgba(240, 240, 240, 0.8);
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease-in-out;
                }
                figure:hover {
                    transform: scale(1.02);
                }
                .fade-effect {
                    background: linear-gradient(145deg, #f3f4f6, #e2e8f0);
                }
                blockquote p {
                    color: rgba(107, 114, 128, 0.85);
                }
            
                @media (min-width: 1024px) {
                    .embla__slide {
                        flex: 0 0 33.3333%; /* Reduced size for large screens to make slides fit properly */
                    }
                }
            
                @media (min-width: 769px) {
                    .embla__slide {
                        flex: 0 0 33.3333%; /* Medium screens, 3 slides visible */
                    }
                }
            
                @media (max-width: 768px) {
                    .embla__slide {
                        flex: 0 0 100%; /* 1 card visible */
                    }
                }
            `}</style>
            
        </section>
    );
};

export default Testimonials;



// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 2500 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [isMediumOrSmall, setIsMediumOrSmall] = useState(false);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on("select", onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMediumOrSmall(window.innerWidth <= 768);
//         };

//         handleResize(); // Check on component mount
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//     const scrollNext = () => emblaApi && emblaApi.scrollNext();

//     return (
//         <section className="bg-white">
//             <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 text-center">
//                 <h2 className="text-5xl font-bold text-black mb-4">Success Stories</h2>
//                 <p className="mb-8 text-lg text-gray-700">
//                     Here are a few stories from our satisfied clients who have successfully secured loans with us.
//                 </p>

//                 <div className="relative">
//                     <div className="embla" ref={emblaRef}>
//                         <div className="embla__container flex">
//                             {testimonials.map((testimonial, index) => (
//                                 <div className="embla__slide flex-shrink-0" key={index}>
//                                     <figure className="w-full max-w-md mx-auto bg-white shadow-lg border border-gray-300 p-6 h-[90%] flex flex-col justify-between rounded-xl fade-effect">
//                                         <svg
//                                             className="h-8 mx-auto mb-3 text-blue-500"
//                                             viewBox="0 0 24 27"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                                                 fill="currentColor"
//                                             />
//                                         </svg>
//                                         <blockquote>
//                                             <p className="text-sm font-medium text-gray-600">{testimonial.quote}</p>
//                                         </blockquote>
//                                         <figcaption className="flex items-center justify-center mt-4 space-x-3">
//                                             <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                                             <div className="text-sm text-gray-500">{testimonial.location}</div>
//                                         </figcaption>
//                                     </figure>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {!isMediumOrSmall && (
//                         <>
//                             <button
//                                 className="absolute top-1/2 left-[-50px] -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none transition"
//                                 onClick={scrollPrev}
//                             >
//                                 ◀
//                             </button>

//                             <button
//                                 className="absolute top-1/2 right-[-50px] -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none transition"
//                                 onClick={scrollNext}
//                             >
//                                 ▶
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                     width: 100%;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     flex: 0 0 100%;
//                     padding: 1rem;
//                 }
//                 figure {
//                     height: 400px;
//                     width: 90%; /* Reduced width for larger screens */
//                     background-color: rgba(240, 240, 240, 0.8); /* Faded vibe */
//                     border-radius: 12px; /* Slightly round corners */
//                     border: 1px solid #e2e8f0; /* Edgy appearance */
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     transition: transform 0.2s ease-in-out;
//                 }
//                 figure:hover {
//                     transform: scale(1.02); /* Subtle zoom on hover */
//                 }
//                 .fade-effect {
//                     background: linear-gradient(145deg, #f3f4f6, #e2e8f0);
//                 }
//                 blockquote p {
//                     color: rgba(107, 114, 128, 0.85); /* Faded quote text */
//                 }

//                 @media (min-width: 1024px) {
//                     .embla__slide {
//                         flex: 0 0 35%; /* Reduced size for large screens */
//                     }
//                 }

//                 @media (min-width: 769px) {
//                     .embla__slide {
//                         flex: 0 0 40%; /* Medium screens */
//                     }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Testimonials;




//     array.reduce((result, item, index) => {
//         const chunkIndex = Math.floor(index / size);
//         if (!result[chunkIndex]) result[chunkIndex] = [];
//         result[chunkIndex].push(item);
//         return result;
//     }, []);

// const groupedTestimonials = chunkTestimonials(testimonials, 3);

// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 3000 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev();
//     }, [emblaApi]);

//     const scrollNext = useCallback(() => {
//         if (emblaApi) emblaApi.scrollNext();
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on("select", onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     return (
//         <section className="bg-white py-8 mt-4">
//             <div className="max-w-screen-xl px-4 mx-auto text-center">
//                 <h2 className="text-5xl font-bold text-black mb-6">Success Stories</h2>
//                 <p className="mb-8 text-base text-gray-700">
//                     Hear what our satisfied clients have to say about our services.
//                 </p>

//                 <div className="relative flex items-center">
//                     {/* Previous Button */}
//                     <button
//                         onClick={scrollPrev}
//                         className="absolute left-[-3rem] transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         style={{ top: "50%" }}
//                         aria-label="Previous"
//                     >
//                         ❮
//                     </button>

//                     {/* Carousel */}
//                     <div className="embla w-full mx-6" ref={emblaRef}>
//                         <div className="embla__container flex">
//                             {groupedTestimonials.map((group, index) => (
//                                 <div className="embla__slide w-full" key={index}>
//                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                         {group.map((testimonial, i) => (
//                                             <figure
//                                                 key={i}
//                                                 className="bg-white rounded-lg border border-gray-300 shadow-lg p-8 flex flex-col justify-between h-[400px] hover:shadow-2xl transition-shadow duration-300 ease-in-out"
//                                             >
//                                                 <svg
//                                                     className="h-8 mx-auto mb-4 text-blue-500"
//                                                     viewBox="0 0 24 27"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                                                         fill="currentColor"
//                                                     />
//                                                 </svg>
//                                                 <blockquote>
//                                                     <p className="text-justify text-base text-gray-800">
//                                                         {testimonial.quote.replace(/\s+/g, ' ')}
//                                                     </p>
//                                                 </blockquote>
//                                                 <figcaption className="flex items-center justify-center mt-4 space-x-3">
//                                                     <div className="font-semibold text-gray-800">{testimonial.name}</div>
//                                                     <span className="text-xs text-gray-600">• {testimonial.location}</span>
//                                                 </figcaption>
//                                             </figure>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Next Button */}
//                     <button
//                         onClick={scrollNext}
//                         className="absolute right-[-3rem] transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         style={{ top: "50%" }}
//                         aria-label="Next"
//                     >
//                         ❯
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     flex: 0 0 100%;
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Testimonials;




//     array.reduce((result, item, index) => {
//         const chunkIndex = Math.floor(index / size);
//         if (!result[chunkIndex]) result[chunkIndex] = [];
//         result[chunkIndex].push(item);
//         return result;
//     }, []);

// const groupedTestimonials = chunkTestimonials(testimonials, 3);

// const Testimonials = () => {
//     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay({ delay: 3000 })]);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const onSelect = useCallback(() => {
//         if (!emblaApi) return;
//         setSelectedIndex(emblaApi.selectedScrollSnap());
//     }, [emblaApi]);

//     const scrollPrev = useCallback(() => {
//         if (emblaApi) emblaApi.scrollPrev();
//     }, [emblaApi]);

//     const scrollNext = useCallback(() => {
//         if (emblaApi) emblaApi.scrollNext();
//     }, [emblaApi]);

//     useEffect(() => {
//         if (emblaApi) {
//             emblaApi.on("select", onSelect);
//         }
//     }, [emblaApi, onSelect]);

//     const cleanQuote = (quote) => {
//         return quote.replace(/\s+/g, ' ').trim(); // Remove extra spaces and trim the text
//     };

//     return (
//         <section className="bg-white py-8">
//             <div className="max-w-screen-xl px-4 mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-black mb-6">Success Stories</h2>
//                 <p className="mb-8 text-base text-gray-700">
//                     Hear what our satisfied clients have to say about our services.
//                 </p>

//                 <div className="relative flex items-center">
//                     {/* Previous Button */}
//                     <button
//                         onClick={scrollPrev}
//                         className="absolute left-[-3rem] transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         style={{ top: "50%" }}
//                         aria-label="Previous"
//                     >
//                         ❮
//                     </button>

//                     {/* Carousel */}
//                     <div className="embla w-full mx-6" ref={emblaRef}>
//                         <div className="embla__container flex">
//                             {groupedTestimonials.map((group, index) => (
//                                 <div className="embla__slide w-full" key={index}>
//                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                         {group.map((testimonial, i) => (
//                                             <figure
//                                             key={i}
//                                             className="bg-white rounded-lg border border-gray-300 shadow-lg p-8 flex flex-col justify-between h-[400px] hover:shadow-2xl transition-shadow duration-300 ease-in-out"
//                                         >
//                                             <svg
//                                                 className="h-8 mx-auto mb-4 text-blue-500"
//                                                 viewBox="0 0 24 27"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path
//                                                     d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                                                     fill="currentColor"
//                                                 />
//                                             </svg>
//                                             <blockquote>
//                                                 <p className="text-justify text-base text-gray-800">
//                                                     “{cleanQuote(testimonial.quote)}”
//                                                 </p>
//                                             </blockquote>
//                                             <figcaption className="flex items-center justify-center mt-4 space-x-3">
//                                                 <div className="font-semibold text-gray-800">{testimonial.name}</div>
//                                                 <span className="text-xs text-gray-600">• {testimonial.location}</span>
//                                             </figcaption>
//                                         </figure>
                                        
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Next Button */}
//                     <button
//                         onClick={scrollNext}
//                         className="absolute right-[-3rem] transform -translate-y-1/2 bg-gray-100 rounded-full shadow-md w-12 h-12 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"
//                         style={{ top: "50%" }}
//                         aria-label="Next"
//                     >
//                         ❯
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .embla {
//                     overflow: hidden;
//                 }
//                 .embla__container {
//                     display: flex;
//                 }
//                 .embla__slide {
//                     flex: 0 0 100%;
//                 }
//             `}</style>
//         </section>
//     );
// };




// export default Testimonials;