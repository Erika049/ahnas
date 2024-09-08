import Head from 'next/head';

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Nos Projets - AHNAS</title>
        <meta name="description" content="Découvrez les projets humanitaires d'AHNAS dans les domaines de l'éducation, de la santé et de l'environnement." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Nos Projets</h1>
        </section>

        {/* Projects Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nos Initiatives</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Projet Éducation</h3>
                <p className="text-gray-600">Nous œuvrons pour offrir des opportunités éducatives aux enfants défavorisés, notamment dans les régions rurales.</p>
              </div>
              {/* Project 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Projet Santé</h3>
                <p className="text-gray-600">Nous menons des campagnes de soins médicaux pour les populations vivant dans des zones reculées et vulnérables.</p>
              </div>
              {/* Project 3 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Projet Environnement</h3>
                <p className="text-gray-600">Nos initiatives se concentrent sur la préservation de l'environnement à travers des actions écologiques.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
