import React, { Component } from 'react';
import DecisionTreeImage from '../images/decisionTree.png';
import ImageFilter from '../images/imageFilter.png';
import TicTacToe from '../images/ticTacToe.png';
import './main.css';

export class Projects extends Component {
    render() {
        return (
            <div style={main}>
                <h2 style={headingText}>Technical Projects</h2>
                <div className="projectsSection">

                     <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <p className="projectTitle">Tic Tac Toe with AI Player</p>
                        <div className="projectDetails">
                            <img className="projectImage" src={TicTacToe} />
                            <a href="https://github.com/gsylvest001/Tic-Tac-Toe-Minimax-AI" target="_blank" rel="noopener noreferrer">
                                <div className="projectImageOverlay"> 
                                    <p className="projectImageDescription"> A web version of the game tic tac toe which uses the minimax algorithm with alpha beta prunning to choose the next move for the AI player. </p>
                                </div>
                            </a>
                        </div>                        
                     </div>

                     <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <p className="projectTitle">Machine Learning - Decision Tree</p>
                        <div className="projectDetails">
                            <img className="projectImage" src={DecisionTreeImage} />
                            <a href="https://github.com/gsylvest001/Machine-Learning-Decision-Tree" target="_blank" rel="noopener noreferrer">
                                <div className="projectImageOverlay"> 
                                    <p className="projectImageDescription"> A python program which creates a decision tree from a csv file from scratch, by calculating the entropy and information gain for each feature. </p>
                                </div>
                            </a>
                        </div>                        
                     </div>

                     <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <p className="projectTitle">Custom Image Filter </p>
                        <div className="projectDetails">
                            <img className="projectImage" src={ImageFilter} />
                            <a href="https://github.com/gsylvest001/ImageProcessing-Filters" target="_blank" rel="noopener noreferrer">
                                <div className="projectImageOverlay"> 
                                    <p className="projectImageDescription"> A java program which applies any 3x3 kernel/filter to an image and produces the resulting image. </p> 
                                </div>
                            </a>
                            
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
    backgroundColor: "#2fada1"
};

const headingText = {
    marginLeft: '20px',
    fontSize: '3.5vw',
    color: '#ffffff'
}

export default Projects;

