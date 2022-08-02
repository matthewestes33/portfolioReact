import React from 'react';
import PortfolioResume from '../../assets/images/estes-resume.pdf'

function Resume() {

    return (
        <section class="mb-5">
            <div class="row justify-content-center" id="about-section">
                <p>
                    Full stack web developer in training with extensive experience in education, training, and development.
                    Progressing to a certificate in full stack development (JavaScript MERN Stack) from the University of Arizona.
                    10+ years experience as an adult educator, with recent expertise in translating in-person instruction to virtual and on-demand audiences.
                    Similar experience in curriculum development for diverse audiences and stakeholders.
                </p>
                <p>
                    Formal education includes a law degree, with significant work experience related to legal writing and research.
                    Currently seeking to bring my web development expertise and creativity up to par with my existing communication, writing, and project management abilities.
                    Positioned to provide unique perspectives on creating and implementing user stories into future projects by leveraging past experiences working in government, higher education, and boutique firms.
                    Seeking to leverage my skillset with a like-minded team to build better experiences on the web.
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

