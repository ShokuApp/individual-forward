import { Menu } from "../../models";

export abstract class MenuState {}

export class MenuInitialState extends MenuState {}

export class MenuLoadingState extends MenuState {}

export class MenuErrorState extends MenuState {}

export class MenuGetState extends MenuState {
  menu: Menu;

  constructor(menu: Menu) {
    super();
    this.menu = menu;
  }
}

export class MenuListState extends MenuState {
  Menues: Menu[];

  constructor(Menues: Menu[]) {
    super();
    this.Menues = Menues;
  }
}
