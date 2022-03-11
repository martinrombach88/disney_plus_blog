import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const navigate = useNavigate();
  const idList = [0, 1, 2];

  return (
    <div className="watchList">
      <h3>Your Watch List</h3>
      <ul>
        <li onClick={() => navigate("/media", { state: { id: idList[0] } })}>
          <p>Agents of Shield</p>
          <img
            className="watchListImage"
            src="./assets/images/shield.jpg"
            alt="Agents of Shield"
          />
        </li>
        <li onClick={() => navigate("/media", { state: { id: idList[1] } })}>
          <p>Ant Man</p>
          <img
            className="watchListImage"
            src="./assets/images/antman.jpg"
            alt="Ant Man"
          />
        </li>
        <li onClick={() => navigate("/media", { state: { id: idList[2] } })}>
          <p>Star Trek Discovery</p>
          <img
            className="watchListImage"
            src="./assets/images/s_discovery.jpg"
            alt="Star Trek Discovery"
          />
        </li>
      </ul>
    </div>
  );
};

export default WatchList;
