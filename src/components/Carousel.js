import React, { useState } from "react";
import ReactDOM from "react-dom";
import { articleList } from "./articleList";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = articleList.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(articleList) || articleList.length === 0) {
    return null;
  }

  return (
    <>
      <div className="carousel">
        {articleList.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
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
                <div className="carousel__Title">
                  <p>{slide.title}</p>
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
    </>
  );
};

export default Carousel;
