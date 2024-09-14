// import Link from 'next/link';

// interface Article {
//   id: number;
//   category: string;
//   title: string;
//   imageUrl: string;
//   date: string;
//   country: string;
// }

// const blogArticles: Article[] = [
//   {
//     id: 1,
//     category: 'Urgence',
//     title: 'Israël-Palestine : des milliers d\'enfants usés par la guerre',
//     imageUrl: '/images/art1.jpg',
//     date: '11 septembre 2024',
//     country: 'Israël / Palestine',
//   },
//   {
//     id: 2,
//     category: 'Urgence',
//     title: 'Gaza : 45 000 élèves de CP n\'ont pas pu commencer la nouvelle année scolaire',
//     imageUrl: '/images/art2.jpg',
//     date: '9 septembre 2024',
//     country: 'Palestine',
//   },
//   {
//     id: 3,
//     category: 'Communiqué de Presse',
//     title: 'Nomination du Premier ministre : réaction d\'Adeline Hazan',
//     imageUrl: '/images/art3.jpg',
//     date: '5 septembre 2024',
//     country: 'France',
//   },
//   {
//     id: 4,
//     category: 'Humanitaire',
//     title: 'Des actions solidaires en Afrique du Nord',
//     imageUrl: '/images/art4.jpg',
//     date: '2 septembre 2024',
//     country: 'Afrique du Nord',
//   }
// ];

// const BlogSection = () => {
//   return (
//     <section className="py-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8">Actualités AHNAS</h2>

//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {blogArticles.map((article) => (
//           <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />

//             <div className="p-6">
//               <span className="text-xs font-bold text-red-500 uppercase">{article.category}</span>
//               <Link href={`/articles/${article.id}`}>
//                 <h3 className="text-xl font-semibold mt-2 text-blue-600 hover:underline cursor-pointer">
//                   {article.title}
//                 </h3>
//               </Link>

//               <div className="mt-6 text-sm text-gray-500">
//                 <span>{article.country} - {article.date}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


// components/BlogSection.tsx
import Link from 'next/link';

interface Article {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  date: string;
  country: string;
}

const blogArticles: Article[] = [
  {
    id: 1,
    category: 'Urgence',
    title: 'Israël-Palestine : des milliers d\'enfants usés par la guerre',
    imageUrl: '/images/art1.jpg',
    date: '11 septembre 2024',
    country: 'Israël / Palestine',
  },
  {
    id: 2,
    category: 'Urgence',
    title: 'Gaza : 45 000 élèves de CP n\'ont pas pu commencer la nouvelle année scolaire',
    imageUrl: '/images/art2.jpg',
    date: '9 septembre 2024',
    country: 'Palestine',
  },
  {
    id: 3,
    category: 'Communiqué de Presse',
    title: 'Nomination du Premier ministre : réaction d\'Adeline Hazan',
    imageUrl: '/images/art3.jpg',
    date: '5 septembre 2024',
    country: 'France',
  },
  {
    id: 4,
    category: 'Humanitaire',
    title: 'Des actions solidaires en Afrique du Nord',
    imageUrl: '/images/art4.jpg',
    date: '2 septembre 2024',
    country: 'Afrique du Nord',
  }
];

const BlogSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto flex justify-between items-center mb-8">
        {/* Titre à gauche */}
        <h2 className="text-4xl font-bold text-gray-600">Actualités AHNAS</h2>

        {/* Bouton Voir Plus à droite */}
        <Link href="/blog">
          <h1 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-400 transition duration-300">
            VOIR PLUS
          </h1>
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogArticles.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold text-red-500 uppercase">{article.category}</span>
              <Link href={`/articles/${article.id}`}>
                <h3 className="text-xl font-semibold mt-2 text-gray-600 hover:text-blue-400 cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <p className="text-gray-600 mt-4">{article.description}</p>
              <div className="mt-6 text-sm text-gray-500">
                <span>{article.country} - {article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
