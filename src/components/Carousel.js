import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useLocation, useNavigate } from "react-router-dom";

const Carousel = ({ list }) => {
  let articleList = list;
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [savedSlide, setSavedSlide] = useState("");
  const length = articleList.length;

  const nextSlide = () => {
    setSavedSlide("slide__next");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setSavedSlide("slide__prev");
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(articleList) || articleList.length === 0) {
    return null;
  }

  // setTimeout(nextSlide, 7000);

  return (
    <div className="carousel">
      {articleList.map((slide, index) => {
        return (
          <div
            onClick={() => navigate("/article", { state: { id: slide } })}
            className={
              index === current
                ? savedSlide + " active"
                : index + 1 === current ||
                  (index === articleList.length - 1 && index !== current + 1)
                ? "slide__prev"
                : "slide__next"
            }
            key={index}
          >
            {index === current && (
              <img
                className="carousel__Image"
                alt={slide.title}
                src={slide.imagePath}
              ></img>
            )}
            {index === current && (
              <div key={index} className="carousel__Title">
                <p>
                  {slide.type} - {slide.title}
                </p>
              </div>
            )}
          </div>
        );
      })}
      <div className="carousel__PrevContainer" onClick={prevSlide}>
        <a className="carousel__Btn carousel__Prev">&#10094;</a>
      </div>
      <div className="carousel__NextContainer" onClick={nextSlide}>
        <a className="carousel__Btn carousel__Next">&#10095;</a>
      </div>
    </div>
  );
};

export default Carousel;
