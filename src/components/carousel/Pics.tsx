import Carousel from 'react-bootstrap/Carousel';

function Pics(props: any) {
  return (
    <Carousel className='absolute top-0 bottom-0 w-90 h-96'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'

    >
      <Carousel.Item>
        <img
          src={props.image}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          src={props.image}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img

          src={props.image}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default Pics;