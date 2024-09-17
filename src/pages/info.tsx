// import Head from 'next/head';
// import Image from 'next/image';

// const About = () => {
//   return (
//     <div>
//       <Head>
//         <title>À propos de AHNAS</title>
//         <meta name="description" content="En savoir plus sur l'histoire, la mission et l'équipe d'AHNAS." />
//       </Head>

//       <main className="min-h-screen bg-gray-50 pt-20">
//         {/* Header */}
//         <header className="bg-gray-400 text-white fixed top-0 left-0 w-full z-50">
//           <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//             {/* Logo and Title */}
//             <div className="flex items-center space-x-4">
//               <Image src="/images/img1.jpg" alt="Logo AHNAS" width={80} height={80} className="rounded-full" />
//               <h1 className="text-3xl font-bold">AHNAS</h1>
//             </div>
//             {/* Navigation */}  
//             <nav>
//               <ul className="flex space-x-6">
//                 <li><a href="/" className="hover:text-gray-500">Accueil</a></li>
//                 <li><a href="/info" className="hover:text-gray-500">À propos de nous</a></li>

//                 <li className="relative group">
//                   <a href="#" className="hover:text-gray-500">Nos Domaines d'action</a>
//                   {/* Dropdown Menu */}
//                   <ul className="absolute left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <li><a href="/education" className="block px-4 py-2 hover:bg-gray-300">Education</a></li>
//                     <li><a href="/health" className="block px-4 py-2 hover:bg-gray-300">Santé</a></li>
//                     <li><a href="/environment" className="block px-4 py-2 hover:bg-gray-300">Environnement</a></li>
//                   </ul>
//                 </li>
//                 <li><a href="/blog" className="hover:text-gray-500">Blog</a></li>
//                 <li><a href="/contact" className="hover:text-gray-500">Nous Contacter</a></li>
//               </ul>
//             </nav>
//           </div>
//         </header>

//         <section className="bg-blue-600 text-white py-16 text-center">
//           <div className="container mx-auto px-4">
//             <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
//             <p className="text-lg">Découvrez l'histoire et la mission de l'association AHNAS.</p>
//           </div>
//         </section>

//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre histoire</h2>
//             <p className="text-gray-600 mb-4">
//               AHNAS a été fondée avec la mission de venir en aide aux populations les plus vulnérables. Depuis plusieurs années, nous menons divers projets humanitaires à travers le monde pour soutenir ceux dans le besoin.
//             </p>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre mission</h2>
//             <p className="text-gray-600">
//               Notre objectif est de renforcer l'accès aux ressources vitales telles que l'éducation, la santé, et la sécurité alimentaire dans les communautés défavorisées.
//             </p>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2024 AHNAS. Tous droits réservés.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default About;

import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Head>
        <title>À propos de AHNAS</title>
        <meta name="description" content="En savoir plus sur l'histoire, la mission et l'équipe d'AHNAS." />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Header */}
        <header className="bg-gray-400 text-white fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <Image src="/images/img1.jpg" alt="Logo AHNAS" width={80} height={80} className="rounded-full" />
              <h1 className="text-3xl font-bold">AHNAS</h1>
            </div>
            {/* Navigation */}  
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-gray-500">Accueil</a></li>
                <li><a href="/info" className="hover:text-gray-500">À propos de nous</a></li>

                <li className="relative group">
                  <a href="#" className="hover:text-gray-500">Nos Domaines d'action</a>
                  {/* Dropdown Menu */}
                  <ul className="absolute left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <li><a href="/education" className="block px-4 py-2 hover:bg-gray-300">Education</a></li>
                    <li><a href="/health" className="block px-4 py-2 hover:bg-gray-300">Santé</a></li>
                    <li><a href="/environment" className="block px-4 py-2 hover:bg-gray-300">Environnement</a></li>
                  </ul>
                </li>
                <li><a href="/blog" className="hover:text-gray-500">Blog</a></li>
                <li><a href="/contact" className="hover:text-gray-500">Nous Contacter</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Banner Section */}
        {/* <section className="bg-gray-500 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
            <p className="text-lg">Découvrez l'histoire et la mission de l'association AHNAS.</p>
          </div>
        </section> */}

        {/* Main Content */}
        <section className="py-16 bg-white">
        <h3 className="text-5xl font-bold text-center text-gray-600 mb-8 py-5">Qui sommes-nous ?</h3>

          {/* Image */}
         
              <Image
                src="/images/img3.jpg" 
                alt="Bannière AHNAS"
                width={1600}
                height={30}
                className="object-cover rounded-lg mx-auto"
              />
            
          
          <div className="container mx-auto px-4">
            {/* Historique */}
            <div className="py-3 text-gray-600 mb-6">
              <h3 className="py-5 text-3xl font-bold text-blue-600 ">Qu'est-ce-que l'AHNAS ?</h3>
                <p className=" text-gray-600 mb-4">
                <span className="font-bold">Fondée en ------ </span>, l'Association d'Aide Humanitaire pour les Nécessiteux et les Sans-abri: AHNAS est une association 
                apolitique regie par la loi N°90/053 du 19/12/1990, dont le siège social est à <span className="font-bold">Foumban en république du Cameroun</span>, 
                et avec pour axe la protection de l'environnement et le contrôle des maladies.
                </p>
                <p className="mb-4">
                  Les activités de AHNAS s'étendent sur tout le territoiree camerounais et des antennes de représentation peuvent être établies à tout endroits sur 
                  décision de l'Asse,blée générale à la majorité des 2/3.
                </p>
            </div>

            {/* Structure et Fonctionnement */}
            <div className="text-gray-600 mb-">
              <h3 className=" text-3xl font-bold text-blue-600 mb-8">Structure et Fonctionnement</h3>
                <p className="text-gray-600 mb-4">
                  AHNAS est dirigée par un conseil d'administration composé de membres expérimentés. Celle-ci est Structurée de manière à avoir :
                </p>
                  <ul className="list-none ml-5">
                  <li className="flex items-start mt-5">
                    <span className="text-blue-600 mr-2 text-3xl">-</span>
                    <span className="font-bold ml-2 mt-2">un bureau exécutif ou conseil d'administration </span>
                  </li>
                  <li className="flex items-start mt-5">
                    <span className="text-blue-600 mr-2 text-3xl">-</span>
                    <span className="font-bold ml-2 mt-2">des antennes de représentation </span>
                  </li>
                  <li className="flex items-start mt-5">
                    <span className="text-blue-600 mr-2 text-3xl">-</span>
                    <span className="font-bold ml-2 mt-2">une assemblée générale </span>
                  </li>
                  </ul>
    
                <p className="pt-5 text-gray-600 mb-4">
                  L'assemblée ordinaire comprend tous les membres de l'association.<span className="font-bold"> Elle se réuni une foi par an </span> sur 
                    convocation du président ou sur demande du quart au moins de ses membres. <span className="font-bold">Cependant, ne prennent parole et ne peuvent 
                    voter que les membres actifs à jour de leurs cotisations et les membres d'honneurs.</span>
                </p>
            </div>

            {/* But */}
            <div className="py-10 text-gray-600 mb-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">Les missions de l'AHNAS au Cameroun</h3>

            <ul className="list-none ml-5">
              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2">Réunir  sans discrimination toutes personnes conscientes de la pauvreté, de l'insuffisance de la couverture médicale 
                  en Afrique et des conséquences du non-respect de l'environnement sur la santé humaine et animale.
                </span>
              </li>
  
              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2">Favoriser toute action visant à protéger l'environment par le recyclage des déchets plastiques, le reboisement 
                  et la lutte contre déforestation.
                </span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Favoriser la disponibilité en médicaments essentiels, du matériel médical (dans les structures sanitaires défavorisées),
                  la création et la modernisation des <span className="font-bold">Instituts de médécine Traditionnelle</span>, la formation des professionnels de
                  santé aux nouvelles médécines.
                </span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Développer des médicaments génériques traditionnels avec l'assistance des firmes pharmaceutiques.</span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Favoriser l'association des médicaments traditionnels et celles scientifiques modernes.</span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Encadrer et suivre les enfants défavorisés.</span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Lutter contre les grandes maladies chez l'Homme: <span className="font-bold">VIH-SIDA, Tuberculose, Paludisme</span>;
                et chez l'animal: <span className="font-bold">la rage</span>.
                </span>
              </li>

              <li className="flex items-start mt-5">
                <span className="text-blue-600 mr-2 text-3xl">→</span>
                <span className="ml-2 mt-2"> Faire de la rechereche appliquée en plantes médécinales locales.</span>
              </li>
            </ul>

            </div>

            {/* Domaines */}
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Nos domaines d'interventions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-sm">
              <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Education</h4>
              <p className="text-gray-600">Investir dans l'éducation pour un avenir meilleur.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-sm">
                <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Santé</h4>
                <p className="text-gray-600">Promouvoir des soins de santé accessibles pour tous.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-sm">
                <h4 className="text-xl font-bold text-gray-800 text-center mb-2">Environnement</h4>
                <p className="text-gray-600">Protéger notre pays pour les générations futures.</p>
            </div>
          </div>

            {/* Ressources */}
            <h3 className="pt-16 text-3xl font-bold text-blue-600 mb-6">Ressources</h3>
            <p className="text-gray-600 mb-4">
              Les ressources de l'AHNAS proviennent des <span className="font-bold">droits d'adhésion, des cotisations des membres, des produits et activités de
              l'association, des dons et legs, </span> et toute autre ressources autorisées.
            </p>
            <p className='text-gray-600 mb-4'> celles-ci sont utilisées pour des investissements et pour le fonctionnement de l'association.</p>

          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-200 py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nous Contacter</h2>
            <p className="text-gray-600">Pour toute question ou information complémentaire, n'hésitez pas à nous contacter.</p>
            <a href="/contact" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400">Contactez-nous</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AHNAS. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
