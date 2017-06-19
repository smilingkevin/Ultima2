import { MainGame } from './MainGame';

export const MAIN_GAME_GEN: () => MainGame = () => {

    let mainGame: MainGame = new MainGame();

    mainGame.console.push('Console ready.');

    return mainGame;
};