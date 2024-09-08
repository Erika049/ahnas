const Blog = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4">Bienvenue sur notre blog ! Découvrez nos dernières actualités et articles.</p>
        
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
      </div>
    );
  };
  
  export default Blog;