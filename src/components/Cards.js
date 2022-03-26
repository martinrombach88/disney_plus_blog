import { useLocation, useNavigate } from "react-router-dom";

const Cards = ({ list }) => {
  const navigate = useNavigate();
  const renderedCards = list.map((card, index) => {
    return (
      <div
        key={index}
        className="cards__Card"
        onClick={() => navigate("/article", { state: { id: card } })}
      >
        <img
          className="cards__Image"
          alt={card.title}
          src={card.cardImagePath}
        ></img>
        <div className="cards__Title">
          <p className="cards__TitleType">{card.type}</p>
          <p>{card.title}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="article__Title">
        <h1>Articles</h1>
      </div>
      <div className="cards">{renderedCards}</div>
    </>
  );
};

export default Cards;
