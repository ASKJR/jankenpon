import * as OptionType from '../util/Constants';

const randomMove = () => {
    return OptionType.SELECT_TYPES_ARR[randomIndex()];
}

const randomIndex = () => {
    return Math.floor(Math.random() * OptionType.SELECT_TYPES_ARR.length);
}

export default {
    randomMove
}