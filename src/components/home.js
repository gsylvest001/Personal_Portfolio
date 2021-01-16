import React from 'react';
import './main.css';
import {useSpring, animated} from 'react-spring';
import linkedin from '../images/linkedin.png';
import GitHubLogo from '../images/github.png';
import Resume from '../resume.pdf';


function Home() {
    

    const leftColumnTransition = useSpring({ 
        from: {
            opacity: 0,
            marginLeft: 0
        }, 
        to: {
            opacity: 1,
            marginLeft: 20
        },
        config: { duration: 1000}
    });

    const skillsTransition = useSpring({ 
        from: {
            opacity: 0,
            marginTop: 50
        }, 
        to: {
            opacity: 1,
            marginTop: 0
        },
        config: { duration: 2000}
    });
    
    return (
        
        <div className="mainContent">

            <animated.div style={leftColumnTransition} className="leftColumn">
                <h1 className="headingText">Welcome!</h1>
                <h1 className="nameText">I am Giovanni Sylvestre,</h1>
                <p className="subText" style={{ fontWeight: 'bold'}}>An aspiring software and mobile developer in Canada.</p>
                <p className="subText">Email: giovannisylvestre@gmail.com</p>
                <button className="resumeButton" onClick={() => window.open(Resume) }>My Resume</button>
            </animated.div>

            <div className="rightColumn">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <a href="https://www.linkedin.com/in/giovanni-sylvestre-596303179/" target="_blank" rel="noopener noreferrer"><img className="linkedInLogo" src={linkedin} /></a>
                    <a href="https://github.com/gsylvest001" target="_blank" rel="noopener noreferrer"><img className="gitHubLogo" src={GitHubLogo} style={{marginLeft: 20}} /></a>   
                </div>
                <h1 style={{ color: "#ffffff", fontSize: '2.5vw'}}>Skills</h1>

                <animated.div style={skillsTransition}>
                
                    <div className="skillrow">
                        <div className="skill">React</div>
                        <div className="skill">React-Native</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                    </div>

                    <div className="skillrow">
                        <div className="skill">Java</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">Python</div>
                        <div className="skill">SQL</div>
                    </div>

                    <div className="skillrow">
                        <div className="skill">AWS</div>
                        <div className="skill">ASP.NET API</div>
                        <div className="skill">Jira</div>
                        <div className="skill">Agile</div>
                    </div>

                </animated.div>

            </div>
        
        </div>
    );
}

export default Home;