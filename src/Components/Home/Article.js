import React from "react";
import article from "../../Assets/images/article.jpg";
import Separator from "../Shear/Separator";

const Article = () => {
  return (
    <>
      <article className="article">
        <div className="container">
          <div className="article-area">
            <div className="article-img">
              <img src={article} alt="article" />
            </div>

            <div className="article-content">
              <h2>
                Evolve Belonging Policies and Practices that Don't Serve
                Students Well
              </h2>
              <p>
                Several research studies recognize the centrality of belonging
                for increasing students’ achievement behavior, academic
                performance, positive emotions, and wellness. Our award-winning
                framework stands out because we take an ecological approach to
                student motivation, placing an emphasis on the ways that
                structural realities can be addressed to ensure that students
                have opportunities to belong.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Separator />
    </>
  );
};

export default Article;
