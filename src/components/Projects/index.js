import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectsData from './../ProjectsData';

function Projects() {
  return (
    <div id='projects'>
      <Container>
        <ProjectsData />
      </Container>
    </div>
  )
}

export default Projects;