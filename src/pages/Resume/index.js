import React from 'react';
import './Resume.css';
import Layout from '../../components/Layout/Layout.js';
import ResumeFile from '../../images/Resume.pdf';

const Resume = () => {
    return (
        <Layout>
            <div id="Resume" className="resume">
                <h2>Resume</h2>

                <iframe src={ResumeFile} title="Resume" className="resume-pdf" style={{ width: '1100px', height: '300px' }} />

                {/* Provide a download link for the PDF file */}
                <div className="download-link">
                    <a href={ResumeFile} download>Download Resume</a>
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
