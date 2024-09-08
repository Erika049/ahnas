import { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traitement du formulaire ou envoi des données vers un backend
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <Head>
        <title>Contact - AHNAS</title>
        <meta name="description" content="Contactez-nous pour toute question ou information concernant l'association AHNAS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">AHNAS</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-200">Accueil</a></li>
                <li><a href="/about" className="hover:text-gray-200">À propos</a></li>
                <li><a href="/projects" className="hover:text-gray-200">Projets</a></li>
                <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Nous Contacter</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Vous avez des questions ou souhaitez en savoir plus sur notre association ? Remplissez le formulaire ci-dessous, nous vous répondrons dès que possible.</p>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Entrez votre nom"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Entrez votre email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Entrez votre message"
                  rows={6}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
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
};

export default Contact;
