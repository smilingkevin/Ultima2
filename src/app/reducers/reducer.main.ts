import { MainGame } from '../world/mainGame';
import { Action } from 'redux';
import { ACTION_TEXT, ACTION_MOVE, ACTION_GET, ACTION_WON } from '../actions/ActionList';
import { console } from './reducer.console';
import { ITextAction } from '../actions/createAction';
import { MAIN_GAME_GEN } from '../world/mainGameGen';

export const mainReducer = (state: MainGame = MAIN_GAME_GEN(), action: Action) => {

    if (action.type === ACTION_TEXT) {
        return defaultReducer(state, action as ITextAction);
    }

    return state;
}

const defaultReducer = (state: MainGame, action: Action) => {
    let mainGame = new MainGame();
    state.console.push('testing');
    mainGame.console = console(state.console, action);
    return mainGame;
};
