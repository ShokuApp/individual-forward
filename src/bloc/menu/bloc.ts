import { Bloc } from "@felangel/bloc";
import { MenuEvent, MenuGetEvent } from "./event";
import {
  MenuErrorState,
  MenuGetState,
  MenuInitialState,
  MenuLoadingState,
  MenuState,
} from "./state";
import { MenuRepository } from "../../repositories";

class MenuBloc extends Bloc<MenuEvent, MenuState> {
  private repository: MenuRepository;

  constructor(repository: MenuRepository) {
    super(new MenuInitialState());

    this.repository = repository;
  }

  async *mapEventToState(event: MenuEvent): AsyncIterableIterator<MenuState> {
    yield new MenuLoadingState();

    if (event instanceof MenuGetEvent) {
      yield* this.get(event);
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
}
