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
      src="https://secure.img1-fg.wfcdn.com/im/42300235/scale-h550-w1600%5Ecompr-r85/1801/180149345/Sofa%2527s+and+Sectionals.+They%2527re+back+but+not+for+long.+Shop+Top+Rated+Sofas+and+Sectionals.jpg"
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
      src="https://secure.img1-fg.wfcdn.com/im/05423003/scale-h550-w1600%5Ecompr-r85/1617/161726462/Comfort+Zone.+Create+the+ultimate+space+to+unwind+with+laid+back+designs+that+redefine+rest..jpg"
      alt="New Year Deals"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>You make us look good — shop + get inspired by real life spaces from our Frntr community.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img1.homary.com/filters:format(webp)/ad/2021/10/21/2d8f6964ca67a7e0c9ee22c32c0e1245.jpg"
      alt="New Year Sale"
    />
    <Carousel.Caption>
      <h3>New Year, New You, New Look</h3>
      <p>Essentials Ready and Waiting to Ship</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    </div>
  )
}
