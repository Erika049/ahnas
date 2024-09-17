import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from './Composants/Caroussel';
import BlogSection from './Composants/blogArt';

const Home = () => {
  return (
    <div>
      <Head>
        <title>AHNAS - Association d'Aide Humanitaire</title>
        <meta name="description" content="Bienvenue sur le site de l'association AHNAS. Notre mission est d'aider ceux dans le besoin à travers divers projets humanitaires." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 pt-20"> 
        {/* Header */}
        <header className="bg-gray-400 text-white fixed top-0 left-0 w-full z-50">
          <div className="w-full px-4 py-6 flex justify-between items-center">
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

        {/* Carousel Section */}
        <section className="py-0 bg-gray-100 w-full">
          <div className="w-full px-4">
            <Carousel />
          </div>
        </section>

        {/* Actualites blog */}
        <BlogSection /> 

        {/* Call to Action */}
        <section className="py-16 h-100 bg-gray-200 text-gray-600 text-center w-full ">
          <div className="w-full px-4">
            <h3 className="text-7xl font-bold mb-4"><span className="text-blue-600">Rejoignez-nous</span> dans notre <span className="text-blue-600">mission</span> pour qu'<span className="text-blue-600">ensemble</span> l'on puisse continuer de mener à <span className="text-blue-600">bien</span> nos <span className="text-blue-600">initiatives</span>.</h3>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="w-full px-4">
            <h3 className="text-5xl font-bold text-gray-600 mb-8">Nos secteurs d'activités</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Link href="/education">
                <div className="cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
                  <img src="/images/ED.jpg" alt="Projet Education" className="mb-4 h-60 w-full object-cover rounded" />
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">Education</h4>
                  <p className="text-gray-600">Soutenir l'accès à l'éducation pour les enfants dans les zones défavorisées.</p>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="/sante">
                <div className="cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
                  <img src="/images/SA.jpg" alt="Projet Santé" className="mb-4 h-60 w-full object-cover rounded" />
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">Santé</h4>
                  <p className="text-gray-600">Améliorer l'accès aux soins médicaux pour les populations vulnérables; et développer davantage la médecine traditionnelle.</p>
                </div>
              </Link>

              {/* Project 3 */}
              <Link href="/environnement">
                <div className="cursor-pointer bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow">
                  <img src="/images/EV.jpg" alt="Projet Environnement" className="mb-4 h-60 w-full object-cover rounded" />
                  <h4 className="text-2xl font-bold text-blue-600 mb-4">Environnement</h4>
                  <p className="text-gray-600">Promouvoir des initiatives écologiques pour protéger l'environnement.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Nos partenaires Section */}
        <section className="py-16 bg-gray-200 w-full">
          <div className="w-full px-4 text-center">
            <h3 className="text-5xl font-bold text-gray-600 mb-8">Nos partenaires</h3>
            <p className="text-gray-600 mb-6">Nous collaborons avec plusieurs partenaires à travers le monde pour mener à bien nos projets.</p>
            <Link href="#">
              <h1 className="text-blue-600 hover:underline text-lg">En savoir plus</h1>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 w-full">
        <div className="w-full px-4 text-center">
          <p>&copy; 2024 AHNAS. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
