import React from 'react';
import PortfolioResume from '../../assets/images/estes-resume.pdf'

function Resume() {

    return (
        <section class="mb-5">
            <div class="row justify-content-center" id="about-section">
                <p>
                    Full stack web developer in training with extensive experience in education, training, and development.
                    Recently completed a certificate in full stack development (JavaScript MERN Stack) from the University of Arizona,
                    with a focus on intensive collaboration with colleagues and faculty on group projects.
                    10+ years experience as an adult educator, with recent expertise in translating in-person instruction to virtual and on-demand audiences.
                    Certified supervisor and manager, with education and experience in job coaching, project management, and traditional HR topics.
                    Formal education includes a law degree, with significant work experience related to legal writing and research.
                </p>
                <a class="about-section" href={PortfolioResume} download="Resume">
                    Download Resume
                </a>
            </div>

            <div class="justify-content-center mt-5">
                <div id="about-section">
                    <h3>Front End</h3>
                    <p>HTML, CSS (Bootstrap, Materialize), JavaScript, jQuery, React.js, Progressive Web Applications</p>
                </div>

                <div id="about-section" class="mt-5">
                    <h3>Back End</h3>
                    <p>
                    Node.js, Express.js, mySQL, Sequelize, NoSQL (MongoDB, Mongoose), API's (web, third-party, server-side), Handlebars
                    </p>
                </div>
            </div>
        </section >
    );
}

export default Resume;

