import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import cake from './images/cake.jpg'
import donuts from './images/donuts.png'
import rice from './images/rice.png'

export default function SlideShow() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      //customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img src={donuts} width="50%" alt="" />
      </div>
      <div>
        <img src={rice} width="40%" alt="" />
      </div>
      <div>
        <img src={cake} width="60%" alt="" />
      </div>
    </Carousel>
  )
}
