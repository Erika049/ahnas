import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Head>
        <title>AHNAS - Association d'Aide Humanitaire</title>
        <meta name="description" content="Bienvenue sur le site de l'association AHNAS. Notre mission est d'aider ceux dans le besoin à travers divers projets humanitaires." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-gray-400 text-white">
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

        {/* Hero Section */}
        <section className="bg-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Bienvenue chez AHNAS</h2>
            <p className="text-lg text-gray-600 mb-8">Notre mission est de venir en aide à ceux qui en ont le plus besoin à travers des projets humanitaires et solidaires.</p>
            <a href="#" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">Découvrir nos projets</a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Nos secteurs d'activités</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/images/ED.jpg" alt="Projet Education" className="mb-4 h-60 w-full object-cover rounded" />
                <h4 className="text-2xl font-bold text-gray-700 mb-4">Education</h4>
                <p className="text-gray-600">Soutenir l'accès à l'éducation pour les enfants dans les zones défavorisées.</p>
              </div>
              {/* Project 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/images/SA.jpg" alt="Projet Sante" className="mb-4 h-60 w-full object-cover rounded" />
                <h4 className="text-2xl font-bold text-gray-700 mb-4">Santé</h4>
                <p className="text-gray-600">Améliorer l'accès aux soins médicaux pour les populations vulnérables; et developper davantage la médécine traditionnelle.</p>
              </div>
              {/* Project 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/images/EV.jpg" alt="Projet Environnement" className="mb-4 h-60 w-full object-cover rounded" />
                <h4 className="text-2xl font-bold text-gray-700 mb-4">Environnement</h4>
                <p className="text-gray-600">Promouvoir des initiatives écologiques pour protéger l'environnement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4">Rejoignez-nous dans notre mission</h3>
            <p className="text-lg mb-8">Nous avons besoin de votre aide pour continuer à soutenir nos initiatives. Faites un don aujourd'hui et changez des vies.</p>
            <a href="#" className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">Faire un don</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AHNAS. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
