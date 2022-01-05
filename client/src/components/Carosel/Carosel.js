import Carousel from "react-bootstrap/Carousel";
import "./Carosel.css";

export default function Carosel() {
  return (
    <div className="more-containers">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={6000}>
            <div className="carousel-main-card-container">
              <div className="carousel-card-container">
                <div className="carousel-img-container">
                  <img
                    className="carousel-card-img"
                    src="https://i.imgur.com/07wvTLD.png"
                  />
                  <div>
                    <h3 className="carousel-banner-text">
                      Check out this Knives!
                    </h3>
                  </div>
                </div>
                <div className="carousel-title-container"></div>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <div className="carousel-main-card-container">
              <div className="carousel-card-container">
                <div className="carousel-img-container">
                  <img
                    className="carousel-card-img"
                    src="https://i.imgur.com/BwMY57y.png"
                  />
                  <div>
                    <h3 className="carousel-banner-text">
                      Check out this playset!
                    </h3>
                  </div>
                </div>
                <div className="carousel-title-container"> </div>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-main-card-container">
              <div className="carousel-card-container">
                <div className="carousel-img-container">
                  <img
                    className="carousel-card-img"
                    src="https://i.imgur.com/bnQlORH.png"
                  />
                  <div>
                    <h3 className="carousel-banner-text">
                      Check out this Chair!
                    </h3>
                  </div>
                </div>
                <div className="carousel-title-container"> </div>
              </div>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
