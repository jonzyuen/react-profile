import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectsData() {
  const projects = [
    {
      name: 'Run Buddy Webpage',
      description: 'A mock-up website that offers fitness training services.',
      link: 'https://jonzyuen.github.io/run-buddy/',
      github: 'https://github.com/jonzyuen/run-buddy'
    },
    {
      name: 'Venue Covid Tracker',
      description: 'This app allows users to crowdsource information about Covid safety measures taken at venues.  Various prompts are asked and answered in 1-5 stars or short answers.',
      link: 'https://venue-covid-tracker.herokuapp.com/',
      github: 'https://github.com/jonzyuen/covid-app'
    },
    {
      name: 'DnD Note Taker',
      description: 'This specialized app allows users to take notes as painlessly as possible during Dungeons and Dragons sessions.',
      link: 'https://jonzyuen.github.io/run-buddy/',
      github: 'https://github.com/jonzyuen/DnD-Note-Taker'
    }
  ];

  return (
    projects.map((project, i) => (
      <div>
        <Row>
          <Col>
            <div>
              <h4 className='font-bold-900 font-2'>{project.name}</h4>
              <p className='font-color-lightgray font-bold'>
                {project.description}
              </p>
              <div className='padding-top-1e'>
                <a
                  href={project.github}
                  className='padding-left-right-1e'
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='projectsIcon'
                  />
                </a>
                <a
                  href={project.link}
                  className='padding-left-right-1e'
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className='projectsIcon'
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className='bottom-line'></div>
      </div>
    ))
  )
}

export default ProjectsData;