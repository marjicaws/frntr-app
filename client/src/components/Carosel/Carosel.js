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
                  <img className="carousel-card-img" />
                </div>
                <div className="carousel-title-container">
                  <h4 className="carousel-card-title">test</h4>
                </div>
              </div>
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <div className="carousel-main-card-container">
              <div className="carousel-card-container">
                <div className="carousel-img-container">
                  <img className="carousel-card-img" />
                </div>
                <div className="carousel-title-container">
                  <h4 className="carousel-card-title">test</h4>
                </div>
              </div>
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                You make us look good — shop + get inspired by real life spaces
                from our Frntr community.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-main-card-container">
              <div className="carousel-card-container">
                <div className="carousel-img-container">
                  <img className="carousel-card-img" />
                </div>
                <div className="carousel-title-container">
                  <h4 className="carousel-card-title">test</h4>
                </div>
              </div>
            </div>
            <Carousel.Caption>
              <h3>New Year, New You, New Look</h3>
              <p>Essentials Ready and Waiting to Ship</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
