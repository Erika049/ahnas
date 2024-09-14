import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <Head>
        <title>À propos de AHNAS</title>
        <meta name="description" content="En savoir plus sur l'histoire, la mission et l'équipe d'AHNAS." />
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

        <section className="bg-blue-600 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
            <p className="text-lg">Découvrez l'histoire et la mission de l'association AHNAS.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre histoire</h2>
            <p className="text-gray-600 mb-4">
              AHNAS a été fondée avec la mission de venir en aide aux populations les plus vulnérables. Depuis plusieurs années, nous menons divers projets humanitaires à travers le monde pour soutenir ceux dans le besoin.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre mission</h2>
            <p className="text-gray-600">
              Notre objectif est de renforcer l'accès aux ressources vitales telles que l'éducation, la santé, et la sécurité alimentaire dans les communautés défavorisées.
            </p>
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

export default About;
