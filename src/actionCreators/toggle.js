import { TOGGLE } from "../actions/todoActions";

export function toggle(props) {
    return {
        type: TOGGLE,
        id: props
    }
}