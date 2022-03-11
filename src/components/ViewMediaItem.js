import WatchList from "./WatchList";
import Header from "./Header";
import { getMedia } from "./MediaList";
import { useLocation, useNavigate } from "react-router-dom";

const ViewMediaItem = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;
  const mediaItem = getMedia(id);
  console.log(mediaItem);

  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div className="mediaContainer">
          <div className="mediaTitle">
            <h1>{mediaItem.title}</h1>
            <div className="mediaImageContainer">
              <img
                className="mediaImage"
                src={mediaItem.imagePath}
                alt="Agents of Shield"
              />
            </div>
          </div>

          <div className="mediaContent">
            <p>Description: {mediaItem.description}</p>
          </div>

          <div className="mediaWatch">
            <div className="mediaDetails">
              <p>Release Date: {mediaItem.release}</p>
              <p>Rotten Tomatoes Rating: {mediaItem.rtRating}</p>
              <p>Where to watch?</p>
              <p>UK: {mediaItem.watchPlaceUK}</p>
              <p>South Korea: {mediaItem.watchPlaceSK}</p>
            </div>
            <div className="mediaList">
              <ul>
                Posts:
                {/* <li
                  className="mediaPost"
                  onClick={() =>
                    navigate("/review", { state: { id: mediaItem.posts[0] } })
                  }
                >
                  {mediaItem.postTitles[0]}
                </li>
                <li
                  className="mediaPost"
                  onClick={() =>
                    navigate("/review", { state: { id: mediaItem.posts[1] } })
                  }
                >
                  {mediaItem.postsTitles[1]}
                </li>
                <li
                  className="mediaPost"
                  onClick={() =>
                    navigate("/review", { state: { id: mediaItem.posts[2] } })
                  }
                >
                  {mediaItem.postsTitles[2]}
                </li>  */}
              </ul>
            </div>
          </div>
          <div className="buttonList">
            <button>Add to Watchlist</button>
            <button>Create Review</button>
            <button>Make a Top Ten List with this {mediaItem.type}</button>
          </div>
        </div>

        <WatchList />
      </div>
    </div>
  );
};

export default ViewMediaItem;
