import React from 'react';

function About() {
    return (
        <section className="title">
            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="https://avatars.githubusercontent.com/u/100537778?s=400&u=72d12d34ac79b675cda8b19fbcb9c201ea11e808&v=4" alt="Matthew Estes" />
                    <p>
                        Recently certified full stack web developer.
                        Previously an instructor, tutor, curriculum developer, and project manager.
                        Experience in government, higher education, K-12, and for-profit.
                    </p>
                    <p>
                        View more <a href="#/resume" class="link">here</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;