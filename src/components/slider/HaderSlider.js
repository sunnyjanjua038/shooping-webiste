import React from 'react'
import { Button, Carousel} from 'react-bootstrap'

const HaderSlider = () => {
  return (
    <>
    <Carousel variant='dark' >
        <Carousel.Item>
            <img className="d-block w-100"
            style={{height:"100vh", objectFit:"cover"}}
            src="../img/slider/pure-pu-ladies-shoulder-bag.png"
            alt='pure pu ladies bag'/>
             <Carousel.Caption className='bg-white'>
          <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant='dark my-2'>Shop Now</Button>
        </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item>
            <img className="d-block w-100"
            style={{height:"100vh", objectFit:"cover"}}
            src="../img/slider/young-handsome-guy-smart-suit.png"
            alt='pure pu ladies bag'/>
             <Carousel.Caption className='bg-white'>
          <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant='dark my-2'>Shop Now</Button>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100"
            style={{height:"100vh", objectFit:"cover"}}
            src="../img/slider/blender-fruits-kitchen-space.png"
            alt='pure pu ladies bag'/>
             <Carousel.Caption className='bg-white'>
          <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant='dark my-2'>Shop Now</Button>
        </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    </>
  )
}

export default HaderSlider
