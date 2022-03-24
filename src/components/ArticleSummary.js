const ArticleSummary = ({ articleItem, stars }) => {
  if (articleItem.rating) {
    return (
      <div className="article__Summary">
        <p className="article__SummaryText">{articleItem.summary}</p>
        <div className="article__Rating">
          <h6>Rating: </h6>
          <div className="article__StarContainer">
            {stars.map((star, index) => {
              return (
                <div key={index} className="article__Star">
                  {star}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="article__Summary">
        <p className="article__SummaryText">{articleItem.summary}</p>
      </div>
    );
  }
};

export default ArticleSummary;
