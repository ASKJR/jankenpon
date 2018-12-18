import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import cpuBrain from '../computerBrain/Move';
import rules from '../rules/Rules';
import * as Consts from '../util/Constants';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            picChoiceUser: Consts.IMG_FOLDER, 
            picChoiceComputer: Consts.IMG_FOLDER,
            userScore: 0,
            computerScore: 0
        }
    }

    changeImgHandler = (userOption) => {
        this.setUserChoice(userOption);

        if (userOption) {

            let computerOption = cpuBrain.randomMove();
            let matchResult = rules.getMatchResult(userOption,computerOption);
            
            this.setComputerChoice('');

            //delays a little bit cpu response
            setTimeout(() => { 
                this.setComputerChoice(computerOption);
                this.updateScoreBoard(matchResult);
            }, 1000);


        } else {
            //null user choice,set computer choice to null as well
            this.setComputerChoice('');
        }

    }
    //user actions
    setUserChoice = (option) => {
        this.setState({
            picChoiceUser: `${Consts.IMG_FOLDER}${option}.png`
        });
    }

    setUserScore = (score) => {
        this.setState({
            userScore: score
        });
    }



    //computer actions
    setComputerChoice = (option) => {
        this.setState({
            picChoiceComputer: `${Consts.IMG_FOLDER}${option}.png`
        });
    }

    setComputerScore = (score) => {
        this.setState({
            computerScore: score
        });
    }

    updateScoreBoard = (matchResult) => {
        let score;
        switch (matchResult) {
            case Consts.COMPUTER_WINNER:
                score = this.state.computerScore;
                score++;
                this.setComputerScore(score);
                break;
            case Consts.USER_WINNER:
                score = this.state.userScore;
                score++;
                this.setUserScore(score);
                break;
            default:
                break;
        }
    }
    
    render() {
        const center = {
            justifyContent:'center'
        }
        const color = {
            color: 'red'
        }
        return(
            <>
                <NavBar />
                <br></br><br></br>
                <div className="container">
                    <div className="row" style={center}>
                        <div className="col-xs-12">
                            <h1>{this.state.userScore} - <span style={color}>{this.state.computerScore}</span></h1>
                        </div>
                    </div>
                    <div className="row" style={center}>
                        <div className="col-xs-4">
                            <Card actionMenu={true}  img={this.state.picChoiceUser} changeImg={this.changeImgHandler}/>
                        </div>
                        <div className="col-xs-4">
                            <Card img={`${Consts.IMG_FOLDER}/vs.gif`}/>
                        </div>
                        <div className="col-xs-4">
                            <Card img={this.state.picChoiceComputer} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;