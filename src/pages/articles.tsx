import { useRouter } from 'next/router';

const articles = [
  {
    id: 1,
    category: 'Urgence',
    title: 'Israël-Palestine : des milliers d\'enfants usés par la guerre',
    imageUrl: '/images/article1.jpg',
    date: '11 septembre 2024',
    country: 'Israël / Palestine',
    description: 'Des milliers d’enfants affectés par la guerre et la violence en Israël et Palestine.',
  },
  {
    id: 2,
    category: 'Urgence',
    title: 'Gaza : 45 000 élèves de CP n\'ont pas pu commencer la nouvelle année scolaire',
    imageUrl: '/images/article2.jpg',
    date: '9 septembre 2024',
    country: 'Palestine',
    description: 'Les élèves de Gaza font face à de grandes difficultés pour accéder à l\'éducation.',
  },
  {
    id: 3,
    category: 'Communiqué de Presse',
    title: 'Nomination du Premier ministre : réaction d\'Adeline Hazan',
    imageUrl: '/images/article3.jpg',
    date: '5 septembre 2024',
    country: 'France',
    description: 'Adeline Hazan, présidente de l’UNICEF France, réagit à la nomination du nouveau Premier ministre.',
  },
  {
    id: 4,
    category: 'Humanitaire',
    title: 'Des actions solidaires en Afrique du Nord',
    imageUrl: '/images/article4.jpg',
    date: '2 septembre 2024',
    country: 'Afrique du Nord',
    description: 'Des projets humanitaires pour améliorer l’accès à l’eau potable et aux soins de santé en Afrique du Nord.',
  }
];

const ArticleDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const article = articles.find((article) => article.id === parseInt(id as string));

  if (!article) {
    return <p>Article non trouvé</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover mb-8" />
      <p className="text-sm text-gray-600 mb-4">{article.date} - {article.country}</p>
      <p className="text-lg text-gray-700">{article.description}</p>
    </div>
  );
};

export default ArticleDetails;
