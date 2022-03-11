import HomeCarousel from "./HomeCarousel";
import Header from "./Header";
import HomeList from "./HomeList";
import { getReviews } from "./ReviewList";

const Home = () => {
  let list = getReviews();
  let carouselList = [list[0], list[1], list[2]];
  console.log(carouselList);
  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <div className="homeContainer">
          <HomeCarousel
            imagePath0={carouselList[0].imagePath}
            title0={carouselList[0].title}
            imagePath1={carouselList[1].imagePath}
            title1={carouselList[1].title}
            imagePath2={carouselList[2].imagePath}
            title2={carouselList[2].title}
          />
          <HomeList />
        </div>
      </div>
    </div>
  );
};

export default Home;
