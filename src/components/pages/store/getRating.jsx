import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function getRating(rate) {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const fullStarElements = Array.from({ length: fullStars }, (_, index) => (
    <FaStar className="text-warning fs-5" key={`full-star-${index}`} />
  ));

  const halfStarElement = halfStar ? (
    <FaStarHalfAlt className="text-warning fs-5" key="half-star" />
  ) : null;

  const emptyStarElements = Array.from({ length: emptyStars }, (_, index) => (
    <FaRegStar className="text-warning fs-5" key={`empty-star-${index}`} />
  ));

  return (
    <>
      {fullStarElements}
      {halfStarElement}
      {emptyStarElements}
    </>
  );
}
