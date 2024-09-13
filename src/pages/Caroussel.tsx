// import { useState, useEffect } from 'react';

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       content: 'Au cœur des urgences : les défis de l\'accès à l\'éducation',
//       bgColor: 'bg-blue-500',
//       image: '/images/img3.jpg',
//       buttons: [
//         { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
//       ]
//     },
//     {
//       id: 2,
//       content: 'Nos actions pour la santé',
//       bgColor: 'bg-green-500',
//       image: '/images/img2.jpg',
//       buttons: [
//         { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
//       ]
//     },
//     {
//       id: 3,
//       content: 'Participez à nos activités',
//       bgColor: 'bg-red-500',
//       image: '/images/img1.jpg',
//       buttons: [
//         { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
//       ]
//     },
//   ];

//   // Fonction pour passer au slide suivant
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };


//   // Défilement automatique 
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 10000);
//     return () => clearInterval(interval); 
//   }, [currentIndex]);

//   return (
    
//         <div className="relative h-75 w-screen max-w-screen mx-auto ">
//           <div className="overflow-hidden  relative">
//         {/* Conteneur des slides */}
//         <div
//           className="flex transition-transform ease-in-out duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="min-w-full h-96 relative"
//               style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             >
//               {/* Overlay pour le texte et les boutons */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
//                 <span className="bg-blue-600 text-white px-2 py-1 mb-4">OBJECTIFS</span>
//                 <h2 className="text-4xl text-white font-bold mb-6 max-w-lg">{slide.content}</h2>
//                 <div className="flex space-x-4">
//                   {slide.buttons.map((button, index) => (
//                     <a
//                       key={index}
//                       href={button.link}
//                       className={`px-6 py-3 rounded-lg text-sm font-semibold ${button.style}`}
//                     >
//                       {button.label}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;




import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: 'Au cœur des urgences : les défis de l\'accès à l\'éducation',
      image: '/images/img3.jpg',
      buttons: [
        { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
      ]
    },
    {
      id: 2,
      content: 'Nos actions pour la santé',
      image: '/images/img2.jpg',
      buttons: [
        { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
      ]
    },
    {
      id: 3,
      content: 'Participez à nos activités',
      image: '/images/img1.jpg',
      buttons: [
        { label: 'En savoir plus', link: '#', style: 'bg-transparent border border-white text-white hover:bg-blue-600 hover:text-white' }
      ]
    },
  ];

  // Fonction pour passer au slide suivant
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Défilement automatique 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-[600px] w-screen max-w-none mx-auto">
      <div className="overflow-hidden relative">
        {/* Conteneur des slides */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-[600px] relative"
              style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay pour le texte et les boutons */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
                <span className="bg-blue-600 text-white px-2 py-1 mb-4">OBJECTIFS</span>
                <h2 className="text-4xl text-white font-bold mb-6 max-w-lg">{slide.content}</h2>
                <div className="flex space-x-4">
                  {slide.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.link}
                      className={`px-6 py-3 rounded-lg text-sm font-semibold ${button.style}`}
                    >
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
