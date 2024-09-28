import { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

export const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">About This App</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Your Personal Note-Taking Solution</h5>
                    <p className="card-text">
                        Welcome to our Note-Taking App! This application is designed to help you efficiently manage your notes and ideas in one place.
                        Whether you are a student, professional, or simply someone who loves to jot down thoughts, this app is for you.
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">Features:</h6>
                    <ul>
                        <li>Simple and intuitive interface</li>
                        <li>Organize notes with tags and categories</li>
                        <li>Search functionality to quickly find your notes</li>
                        <li>Secure and private: your notes are stored safely</li>
                        <li>Sync across devices</li>
                    </ul>
                    <h6 className="card-subtitle mb-2 text-muted">Getting Started:</h6>
                    <p className="card-text">
                        To start using the app, simply create an account or log in if you already have one. Begin taking notes right away!
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">Feedback:</h6>
                    <p className="card-text">
                        We value your feedback! If you have any suggestions or encounter any issues, please reach out to us.
                    </p>
                </div>
            </div>
        </div>
    );
};
