import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer class='bg-dark fixed-bottom'>
      <Container>
        <Row className='m-auto pt-2'>
          <Col className='m-auto'></Col>
          <Col className='m-auto'>
            <a href='https://github.com/jonzyuen'>
              <FontAwesomeIcon icon={faGithubSquare} className='footerIcon fa-swap' />
            </a>
          </Col>
          <Col className='m-auto'>
            <a href='https://github.com/jonzyuen'>
              <FontAwesomeIcon icon={faLinkedin} className='footerIcon' />
            </a>

          </Col>

          <Col className='m-auto'>
            Jonathan Yuen 2021
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;