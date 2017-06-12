import { MainGame } from '../world/mainGame';
import { Action } from 'redux';

import {
    ACTION_E,
    ACTION_EAST,
    ACTION_G,
    ACTION_GET,
    ACTION_I,
    ACTION_INVENTORY,
    ACTION_L,
    ACTION_LOOK,
    ACTION_N,
    ACTION_NORTH,
    ACTION_S,
    ACTION_SOUTH,
    ACTION_W,
    ACTION_WEST,
    ACTION_WON,
    ACTION_TEXT,
    ACTION_MOVE
} from './ActionList';

export interface IActionCreator {
    (mainGame: MainGame, actionText: string): Action;
}

export const createAction: IActionCreator = (mainGame: MainGame, actionText: string) => {

    let text = actionText.toLowerCase().trim();

    return {
        type: ACTION_TEXT,
        text: "Huh?"
    };
}