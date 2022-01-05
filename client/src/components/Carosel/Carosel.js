import Carousel from "react-bootstrap/Carousel";
import "./Carosel.css";
import { useNavigate } from "react-router-dom";

export default function Carosel() {

  let navigate = useNavigate(); 
  
  const handleClick = (e) => {
    e.preventDefault()
    navigate("/products")
  }

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
                  <div className="text-and-button">
                    <h3 className="carousel-banner-text">
                      Check out these Knives!
                    </h3>
                    <button className="shop-now" onClick = {handleClick}>Shop Now!</button>
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
                  <div className="text-and-button">
                    <h3 className="carousel-banner-text">
                      Check out this playset!
                    </h3>
                    <button className="shop-now" onClick = {handleClick}>Shop Now!</button>
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
                  <div className="text-and-button">
                    <h3 className="carousel-banner-text">
                      Check out this Chair!
                    </h3>
                    <button className="shop-now" onClick = {handleClick}>Shop Now!</button>
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
