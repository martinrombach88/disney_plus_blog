import React from "react";
import ReactDOM from "react-dom";
/* 

 */
const HomeCarousel = (props) => {
  let slideIndex = 1;
  const slides = document.getElementsByClassName("carouSlide");

  function hideSlide(slide) {
    console.log(slide);
    // slide.classList.add("carouSlides");
  }

  // Next/previous controls
  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  return (
    <div className="carousel">
      <div className="carouselTitle">
        <h4>{props.title0}</h4>
      </div>
      <div className="carouselTrackContainer">
        <ul className="carouselTrack">
          <li className="carouselSlide">
            <img
              className="carouselImage"
              src={props.imagePath0}
              alt={props.title0}
            />
          </li>
          <li className="carouselSlide">
            <img
              className="carouselImage"
              src={props.imagePath1}
              alt={props.title1}
            />
          </li>
          <li className="carouselSlide">
            <img
              className="carouselImage"
              src={props.imagePath2}
              alt={props.title2}
            />
          </li>
        </ul>
      </div>

      <div className="carouselPrevContainer">
        <a
          className="carouselBtn carouselPrev"
          onClick={() => {
            hideSlide(slides[0]);
          }}
        >
          &#10094;
        </a>
      </div>
      <div className="carouselNextContainer">
        <a
          className="carouselBtn carouselNext"
          onClick={() => {
            hideSlide(slides[0]);
          }}
        >
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default HomeCarousel;
