import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import CardActions from '@material-ui/core/CardActions';
import Select from '@material-ui/core/Select';

class CardAction extends Component {
    
    constructor(props) {
        super(props);

        this.state = {age:''}
    }

    handleChange = event => {
        const { target } = event;
        const { value }  = target;
        const { name }   = target;
        this.setState({ [name]: value });
        this.props.selectOption(value);
        //console.log(event.target.value);
    };

    render() {
        return(
            <CardActions>
                <Select
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'age',
                    id: 'age-simple',
                    }}
                >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={'rock'}>Rock</MenuItem>
                <MenuItem value={'paper'}>Paper</MenuItem>
                <MenuItem value={'scissor'}>Scissors</MenuItem>
            </Select>
            </CardActions>
        );
    }
}

export default CardAction;