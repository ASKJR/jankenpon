import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pictureUser: ''}
    }

    changeImgHandler = (imgName) => {
        this.setState({
            pictureUser: `/images/${imgName}.png`
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
                            <Card actionMenu={true}  img={this.state.pictureUser} changeImg={this.changeImgHandler}/>
                        </div>
                        <div className="col-xs-4">
                            <Card img={'/images/vs.gif'}/>
                        </div>
                        <div className="col-xs-4">
                            <Card img={'/images/rock.png'} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;