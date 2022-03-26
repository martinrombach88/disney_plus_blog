import Carousel from "./Carousel";
import Header from "./Header";
import Cards from "./Cards";
import { articleList } from "./articleList";

const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <div className="homeContainer">
        <Carousel list={articleList} />
        <Cards list={articleList} />
      </div>
    </div>
  );
};

export default Home;
