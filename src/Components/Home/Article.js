import React from "react";
import article from "../../Assets/images/article.jpg";

const Article = () => {
  return (
    <>
      <article class="article">
        <div class="container">
          <div class="article-area">
            <div class="article-img">
              <img src={article} alt="article" />
            </div>

            <div class="article-content">
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
    </>
  );
};

export default Article;
