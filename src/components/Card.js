import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardAction from './CardAction';

const styles = {
  card: {
    width: 315,
  },
  media: {
    height: 320,
    width: 320,
  },
};
class MediaCard extends Component {
    
    handleCardChange = (value) => {
        this.props.changeImg(value);
    }    

    render(){
        
        const { classes } = this.props;
        const { img } = this.props;
        const { actionMenu } = this.props;
        let actions = (actionMenu) ? <CardAction selectOption={this.handleCardChange}/> : '';
        
        return (
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
                />
            </CardActionArea>
                {actions}
            </Card>
        );
    }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(MediaCard);