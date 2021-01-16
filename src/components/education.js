import React, { Component } from 'react';
import MunLogo from '../images/munLogo.jpg';

export class Education extends Component {
    render() {
        return (
            <div style={main}>
                <h2 style={headingText}>Education</h2>
                <div style={schoolName}>
                    <h1 className="schoolDescription">Memorial University of Newfoundland</h1>
                    <img style={educationImage} src={MunLogo} />
                </div>

                <p className="educationDescription">Expected Graduation: August 2021 </p>
                <p className="educationDescription">Bachelor of Science in Computer Science (Smart Systems)</p>
                <p className="gpaDescription"> - GPA: 3.48/4.0</p>

                
                <p className="educationQuote"> Knowledge is a tresure, but pratice is the key to it. Therefore, I value my time spent learning and coding. I have been able to apply a significant amount of knowledge from computer science courses on my projects as wells as my past work experiences. Therefore, here are some courses I have completed and have found very helpful and inspiring:</p>
                
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <div className="course">
                            <p className="courseName">Comp 4303 - AI in Computer Games</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 3401 - Intro to Data Mining</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 3301 - Visual Computing</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 3202 - Intro to Machine learning</p>
                        </div>
                       
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <div className="course">
                            <p className="courseName">Comp 3201 - Nature - Inspired Computing</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 3200 - Algorithmic Techniques for AI</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 2005 - Software Engineering</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 2004 - Intro to Operating Systems</p>
                        </div>
                        <div className="course">
                            <p className="courseName">Comp 2002 - Data Structures and Algorithms</p>
                        </div>
                    </div>
                 
                </div>
                
                
            </div>

        )
    }

}

const main = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: "#ffffff"
};

const headingText = {
    marginLeft: '20px',
    fontSize: '3.5vw'
}

const schoolName = {
    display: 'flex',
    flexDirection: 'row'
}

const educationImage = {
    width: '10%'
}

export default Education;