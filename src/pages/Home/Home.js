import "./Home.css";
import React, { useEffect, useState } from "react";
import Postcard from './../../component/PostCard/PostCard';
import Loader from './../../component/Loader/Loader';
import { getPopularNews } from "../../service/news.service";
const Home = ({ pageTitle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularNews().then(({data})=>{
    setArticles(data.articles);
    setLoading(false);    
    }).catch((e)=>{
        setError("error");
        setLoading(false);
    })

  }, []);


  return (
    <div className="homepage l-common">
     {loading && <Loader/>} 
      {error ? (
        <h2>Something went wrong</h2>
      ) : (
        <>
          {articles.map((article, index) => (
            <Postcard
              key={index}
              author={article.author}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              content={article.content}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;