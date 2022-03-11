const HomeCarousel = (props) => {
  /* &#10094; and &#10095; are special unicode characters */
  return (
    <div className="carouselContainer">
      <div>
        <img
          className="carouImage carouImage1"
          src={props.imagePath0}
          alt={props.title0}
        />
        <div className="carouTitle">
          <h4>{props.title0}</h4>
        </div>
      </div>
      {/* 
      <div>
        <img
          className="carouImage carouImage1"
          src={props.imagePath1}
          alt={props.title1}
        />
        <div className="carouTitle">
          <h4>{props.title1}</h4>
        </div>
      </div> */}
      {/* <div>
        <img
          className="carouImage carouImage1"
          src={props.imagePath2}
          alt={props.title2}
        />
        <div className="carouTitle">
          <h4>{props.title2}</h4>
        </div>
      </div> */}
      <div className="carouPrevContainer">
        <a className="carouBtn carouPrev">&#10094;</a>
      </div>
      <div className="carouNextContainer">
        <a className="carouBtn carouNext">&#10095;</a>
      </div>
    </div>
  );
};

export default HomeCarousel;
