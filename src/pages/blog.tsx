import Head from "next/head";
import Image from 'next/image';

const Blog = () => {
    return (
      <div>
       <Head>
        <title>Blog/Actualites</title>
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

        <section className="py-16 bg-white">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-4">Bienvenue sur notre blog ! Découvrez nos dernières actualités et articles.</p>
        </section>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Derniers articles</h2>
          <ul className="list-disc pl-5 mt-4">
            <li>
              <a href="/blog/article-1" className="text-blue-500 hover:underline">
                Article 1 : Titre de l'article
              </a>
            </li>
            <li>
              <a href="/blog/article-2" className="text-blue-500 hover:underline">
                Article 2 : Titre de l'article
              </a>
            </li>
            <li>
              <a href="/blog/article-3" className="text-blue-500 hover:underline">
                Article 3 : Titre de l'article
              </a>
            </li>
          </ul>
        </div>
        </main>
      </div>
    );
  };
  
  export default Blog;