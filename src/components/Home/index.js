import React from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';

function Home() {
  return (
    <main class='bg-dark'>
      <Container>
        <Carousel variant='dark'>
          <Carousel.Item>
            <Container>
              <Image
                className='d-block w-100'
                src='../../assets/img/Untitled.jpg'
                alt='First slide'
              />
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <img
                className='d-block w-100'
                src='../../assets/img/test.jpg'
                alt='Second slide'
              />
              <Carousel.Caption>
                <h1>Test 2</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <img
                className='d-block w-100'
                src='../../assets/img/test.jpg'
                alt='Third slide'
              />
              <Carousel.Caption>
                <h1>Test 3</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Container>

          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <img
                className='d-block w-100'
                src='../../assets/img/test.jpg'
                alt='Fourth slide'
              />
              <Carousel.Caption>
                <h1>Test 4</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Container>

          </Carousel.Item>
        </Carousel>
      </Container>
    </main>
  )
};

export default Home;