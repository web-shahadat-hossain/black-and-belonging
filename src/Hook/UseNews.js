import { useEffect, useState } from "react";
const UseNews = () => {
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.blackandbelonging.com/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setNewsLoading(false);
      });
  }, []);

  return [news, newsLoading];
};

export default UseNews;
