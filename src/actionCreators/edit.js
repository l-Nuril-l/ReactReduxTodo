import { EDIT } from "../actions/todoActions";

export function edit(props) {
    return {
        type: EDIT,
        todo: props
    }
}