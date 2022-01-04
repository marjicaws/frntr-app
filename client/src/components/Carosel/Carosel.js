import Carousel from 'react-bootstrap/Carousel'
import './Carosel.css'

export default function Carosel() {
  return (
    <div className='more-containers'>
    <div className='carousel-container'>
      <Carousel>
  <Carousel.Item interval={6000}>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/DQSeVqI.gif"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/DQSeVqI.gif"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/DQSeVqI.gif"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    </div>
  )
}
