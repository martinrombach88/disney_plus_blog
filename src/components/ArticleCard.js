const ArticleCard = ({ articleItem, cardStyle, entry }) => {
  if (cardStyle === "reviewLeft") {
    return (
      <div
        className="article__Image"
        style={{
          backgroundImage: "url(" + articleItem.bgImagePath + ")",
        }}
      >
        <div className="article__Text article__TextLeft">
          <p>{articleItem.text1}</p>
        </div>
      </div>
    );
  }

  if (cardStyle === "reviewRight") {
    return (
      <div
        className="article__Image article__ImageRight"
        style={{
          backgroundImage: "url(" + articleItem.bgImagePath2 + ")",
        }}
      >
        <div className="article__Text article__TextRight">
          <p>{articleItem.text2}</p>
        </div>
      </div>
    );
  }

  if (cardStyle === "topten") {
    console.log(entry.entryNum);
    let side = null;
    let border = null;
    if (entry.entryNum % 2 === 0) {
      border = "article__Text article__TextLeft";
      side = "article__Image";
    } else if (entry.entryNum % 2 !== 0) {
      border = "article__Text article__TextRight";
      side = "article__Image article__ImageRight";
    }
    return (
      <div
        className={side}
        style={{
          backgroundImage: "url(" + entry.bgImagePath + ")",
        }}
      >
        <div className={border}>
          <p>{entry.title}</p>
          <p>{entry.text}</p>
        </div>
      </div>
    );
  }
};

export default ArticleCard;
