import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleTitle from "../components/ArticleTitle";
import ArticleCard from "../components/ArticleCard";
import ArticleSummary from "../components/ArticleSummary";

const ViewReview = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const articleItem = id;
  const blackStar = <span>&#9733;</span>;
  const whiteStar = <span>&#9734;</span>;
  const stars = [];

  if (articleItem.type === "Review" || articleItem.type === "리뷰") {
    for (let i = 0; i < 5; i++) {
      if (i < articleItem.rating) {
        stars.push(blackStar);
      } else {
        stars.push(whiteStar);
      }
    }

    return (
      <div className="mainContainer">
        <Header />
        <div className="article">
          <ArticleTitle articleItem={articleItem} />
          <ArticleCard articleItem={articleItem} cardStyle="reviewLeft" />
          <ArticleCard articleItem={articleItem} cardStyle="reviewRight" />
          <ArticleSummary articleItem={articleItem} stars={stars} />
          <div className="article__Btns">
            <button className="article__Btn">Add to Watchlist</button>
          </div>
        </div>
      </div>
    );
  }

  if (articleItem.type === "Top Ten" || articleItem.type === "상위 10개") {
    return (
      <div className="mainContainer">
        <Header />
        <div className="article">
          <ArticleTitle articleItem={articleItem} />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry10}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry9}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry8}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry7}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry6}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry5}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry4}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry3}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry2}
          />
          <ArticleCard
            articleItem={articleItem}
            cardStyle="topten"
            entry={articleItem.entry1}
          />
          <div className="article__Btns">
            <button className="article__Btn">Add to Watchlist</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewReview;
