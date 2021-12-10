import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCode,
//   faCalendarAlt,
//   faUniversity,
//   faBuilding,
//   faDownload
// } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div id='about' className='pt-5'>
      <Container>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ornare metus, id mattis velit. Vestibulum condimentum laoreet lorem a eleifend. Aliquam pellentesque viverra lectus sit amet eleifend. Pellentesque et aliquet augue, in volutpat quam. Mauris luctus ipsum ligula, dignissim sollicitudin sem porta in. Nunc a massa porta, scelerisque magna non, convallis neque. Vestibulum non erat sem.
              < br />
              < br />
              Praesent ultrices leo mollis ante tristique, ut volutpat lectus commodo. Cras aliquet consectetur eros a porttitor. Vestibulum consequat ante diam, a mollis tortor tincidunt quis. Suspendisse sed pellentesque odio. Maecenas lorem ante, mollis vitae metus vitae, suscipit molestie turpis. Aliquam pulvinar purus et lacinia vestibulum. Integer venenatis hendrerit molestie. Nulla mi elit, blandit id bibendum et, dictum eget massa. Ut nec ex a ex vehicula malesuada. Aenean bibendum tellus neque, quis tincidunt magna congue nec. Phasellus luctus justo ut nulla mattis blandit. Duis libero arcu, tincidunt ut convallis mollis, malesuada eget dolor. Phasellus iaculis consectetur felis at placerat.
            </p>
          </Col>

          <Col>
            <h3>Education</h3>
            <div>
              <p>
                {/* <FontAwesomeIcon
                  icon={faUniversity}
                  className='icon-size-1e icon-color'
                /> */}
                <span>UCLA Extension (Jun 2021 - Nov 2021)</span>
              </p>
              {/* <p>Jun 2021 - Nov 2021</p> */}
            </div>
            <Container>
              <h3>Proficiencies</h3>
              <p>
                {/* <FontAwesomeIcon
                  icon={faCode}
                  className='icon-size-1e icon-color'
                /> */}
                <span>HTML5</span>
              </p>

              <p>
                <span>CSS</span>
              </p>

              <p>
                <span>JavaScript</span>
              </p>

              <p>
                <span>Node.js</span>
              </p>

              <p>
                <span>SQL</span>
              </p>

              <p>
                <span>NoSQL</span>
              </p>

              <p>
                <span >MongoDB</span>
              </p>

              <p>
                <span>React</span>
              </p>
            </Container>


          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;

