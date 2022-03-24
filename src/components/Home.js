import Carousel from "./Carousel";
import Header from "./Header";
import HomeList from "./HomeList";

const Home = () => {
  return (
    <div className="mainContainer">
      <Header />
      <div className="homeContainer">
        <Carousel />
        <HomeList />
      </div>
    </div>
  );
};

export default Home;
