import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', text: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, text } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section class="justify-content-center" id="contact-section">
            <h1 data-testid='h1tag' className="contact">Contact Me</h1>
            <hr></hr>
            <form class="justify-content-center" id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div >
                    <label htmlFor="email">Email:</label>
                    <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="text">Text:</label>
                    <textarea class="form-control" name="text" defaultValue={text} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <div>
                    <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;