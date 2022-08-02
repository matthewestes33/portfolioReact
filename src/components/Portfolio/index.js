import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} stack={project.stack}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;