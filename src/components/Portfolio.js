import React from 'react'; 
import ProjectCards from '../../components/Projects'
import assignments from '../../assignments.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h1 className="title">Portfolio</h1>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {assignments.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} stack={project.stack}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;