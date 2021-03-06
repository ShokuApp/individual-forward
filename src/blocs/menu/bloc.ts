import { Bloc } from "@felangel/bloc";
import { MenuEvent, MenuGetEvent, MenuListEvent } from "./event";
import {
  MenuErrorState,
  MenuGetState,
  MenuInitialState,
  MenuListState,
  MenuLoadingState,
  MenuState,
} from "./state";
import { MenuRepository } from "../../repositories";

export class MenuBloc extends Bloc<MenuEvent, MenuState> {
  private repository: MenuRepository;

  constructor(repository: MenuRepository) {
    super(new MenuInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: MenuEvent): AsyncIterableIterator<MenuState> {
    yield new MenuLoadingState();

    if (event instanceof MenuGetEvent) {
      yield* this.get(event);
    } else if (event instanceof MenuListEvent) {
      yield* this.list(event);
    }
  }

  async *get(event: MenuGetEvent) {
    try {
      const menu = await this.repository.get(event.id);

      yield new MenuGetState(menu);
    } catch (e) {
      yield new MenuErrorState();
    }
  }

  async *list(event: MenuListEvent) {
    try {
      const menus = await this.repository.list();

      yield new MenuListState(menus);
    } catch (e) {
      yield new MenuErrorState();
    }
  }
}
