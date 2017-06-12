import { Component } from '@angular/core';
import { createStore, Store } from 'redux';
import { MainGame } from './world/mainGame';
import { mainReducer } from './reducers/reducer.main';
import { createAction } from './actions/createAction';

@Component({
  selector: 'ultima2-app',
  templateUrl: './ultima2.component.html',
  styleUrls: ['./ultima2.component.css']
})
export class Ultima2Component {
  
  private store: Store<MainGame>;
  private mainGame: MainGame;

  constructor() {
    this.store = createStore(mainReducer);
    this.mainGame = this.store.getState();
    this.store.subscribe(() => this.mainGame = this.store.getState());
  }
  title = 'Welcome to Ultima 2!';

  public handleAction(action: string): void {
    this.store.dispatch(createAction(this.store.getState(), action));
  }
}
