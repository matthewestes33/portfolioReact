import React from 'react';

function About() {
    return (
        <section className="title">
            <h1 class="name">Matthew Estes</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="placeholder.jpg" alt="Matthew Estes" />
                    <p>
                        Currently a coding student studying full stack web development.
                        Previously an instructor, tutor, curriculum developer, and project manager.
                        Experience in government, higher education, K-12, and for-profit.
                    </p>
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
                    <p>
                        View full <a href="#/resume" class="link">resume</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;