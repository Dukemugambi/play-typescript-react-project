import {AppAction, SetVisibilityFilterAction} from "../actions"
import {Reducer,Action} from "redux"
import {Filter} from "../containers/VisibleTodoList";

export function visibilityFilter (state: Filter = 'SHOW_ALL', action: SetVisibilityFilterAction & Action): string  {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter as Reducer<string>
