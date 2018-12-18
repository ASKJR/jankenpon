import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import cpuBrain from '../computerBrain/Move';
import * as Costants from '../util/Constants';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {picChoiceUser: Costants.IMG_FOLDER, picChoiceComputer: Costants.IMG_FOLDER}
    }

    changeImgHandler = (option) => {
        this.setUserChoice(option);

        if (option) {
            //delays a little bit cpu response
            setTimeout(() => { this.setComputerChoice(cpuBrain.randomMove()) }, 2000);
        } else {
            //null user choice,set computer choice to null as well
            this.setComputerChoice('');
        }

    }
    //user actions
    setUserChoice = (option) => {
        this.setState({
            picChoiceUser: `${Costants.IMG_FOLDER}${option}.png`
        });
    }
    //computer actions
    setComputerChoice = (option) => {
        this.setState({
            picChoiceComputer: `${Costants.IMG_FOLDER}${option}.png`
        });
    }

    

    render() {
        const style = {
            justifyContent:'center'
        }
        return(
            <>
                <NavBar />
                <br></br><br></br>
                <div className="container">
                    <div className="row" style={style}>
                        <div className="col-xs-4">
                            <Card actionMenu={true}  img={this.state.picChoiceUser} changeImg={this.changeImgHandler}/>
                        </div>
                        <div className="col-xs-4">
                            <Card img={`${Costants.IMG_FOLDER}/vs.gif`}/>
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