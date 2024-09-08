import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>À propos de AHNAS</title>
        <meta name="description" content="En savoir plus sur l'histoire, la mission et l'équipe d'AHNAS." />
      </Head>

      <main className="min-h-screen bg-gray-50">
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
