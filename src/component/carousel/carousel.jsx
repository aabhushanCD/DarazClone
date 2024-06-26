import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported

function Carousel() {
  useEffect(() => {
    // No need for manual initialization since data-bs-ride="carousel" will handle it
  }, []);

  return (
    <div
      style={{ width: "700px", height: "123px" }}
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            className="d-block w-100"
            alt="Mountain Lake"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            className="d-block w-100"
            alt="Free Images"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
            className="d-block w-100"
            alt="Encrypted Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
