import Head from 'next/head';
import Image from 'next/image';
import  PhoneIcon from '@heroicons/react/solid/PhoneIcon';
import  LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon';
import  MailIcon from '@heroicons/react/solid/MailIcon';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact - AHNAS</title>
        <meta name="description" content="Page de contact de l'association AHNAS" />
      </Head>

      {/* En-tête */}
      <header className="bg-gray-400 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo et Titre */}
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
                {/* Menu déroulant */}
                <ul className="absolute left-0 mt-2 bg-white text-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <li><a href="/education" className="block px-4 py-2 hover:bg-gray-300">Éducation</a></li>
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

      <main className="text-1xl min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Formulaire de contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section du formulaire */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Contacter <span className="text-blue-600">AHNAS</span></h1>

              <form className="bg-white p-6 shadow-lg rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-gray-700">Nom *</label>
                    <input type="text" placeholder="Entrer votre nom" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" required />
                  </div>
                  {/* Prénom */}
                  <div>
                    <label className="block text-gray-700">Prénom *</label>
                    <input type="text" placeholder="Entrer votre prénom" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" required />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-4">
                  <label className="block text-gray-700">E-mail *</label>
                  <input type="email" placeholder="Entrer votre adresse e-mail" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" required />
                </div>

                {/* Objet */}
                <div className="mt-4">
                  <label className="block text-gray-700">Objet *</label>
                  <input type="text" placeholder="Entrer l'objet de votre message" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" required />
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label className="block text-gray-700">Message *</label>
                  <textarea placeholder="Saisissez du texte" rows={8} className="w-full mt-2 p-2 border border-gray-300 rounded-lg" required></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="mt-6 text-right">
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">Envoyer</button>
                </div>
              </form>
            </div>

            {/* Section des informations */}
            <div className="py-11">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Plus <span className="text-blue-600">d'informations</span></h2>
              <p className="text-gray-600 mb-6">
                Voulez-vous participer à une de nos activités ? Faire un don ? Ou pour tout autre besoin particulier, remplissez et envoyez le formulaire. Nous vous contacterons dans les plus brefs délais.
              </p>

              {/* Bureau Info */}
              <div className="mb-6">
                <p className="mt-2 text-gray-600 flex items-center">
                  <LocationMarkerIcon className="h-5 w-5 text-gray-800 mr-2" />
                  <span className="font-semibold text-gray-800 mr-2">Siège social: </span> Foumban, Cameroun
                </p>
                <p className="mt-2 text-gray-600 flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-800 mr-2" />
                  <span className="font-semibold text-gray-800 mr-2">Téléphone: </span> (237) 656 735 905 / (237) 656 391 124
                </p>
                <p className="mt-2 text-gray-600 flex items-center">
                  <MailIcon className="h-5 w-5 text-gray-800 mr-2" />
                  <span className="font-semibold text-gray-800 mr-2">Email: </span> farisabdulrahman30@gmail.com
                </p>
              </div>

              {/* Horaires Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">Nos <span className="text-blue-600">Horaires</span></h3>
                <p className="mt-2 text-gray-600">Lundi - Dimanche: 07h - 17h</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
