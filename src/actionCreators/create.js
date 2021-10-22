import { CREATE } from "../actions/todoActions";

export function create(props) {
    return {
        type: CREATE,
        todo: props
    }
}