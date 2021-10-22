import { REMOVE } from "../actions/todoActions";

export function remove(props) {
    return {
        type: REMOVE,
        id: props
    }
}