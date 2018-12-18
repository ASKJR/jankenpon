import * as Const from '../util/Constants';

const getMatchResult = (userOption, computerOption) => {
    if (userOption === computerOption) {
        return Const.DRAW;
    } else if ((Const.SCISSOR === userOption && Const.PAPER === computerOption) || 
                (Const.ROCK === userOption && Const.SCISSOR === computerOption) || 
                (Const.PAPER === userOption && Const.ROCK === computerOption)) {
        return Const.USER_WINNER;

    } else {
        return Const.COMPUTER_WINNER;
    }
}

export default {
    getMatchResult
}