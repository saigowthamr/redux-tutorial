
const intialState = { name: "reactgo", allNames: [], error: "" }

const reducer = (state = intialState, action) => {

    if (action.type === "ADDNAME") {
        return {
            allNames: state.allNames.concat(state.name),
            name: ""
        }
    }

    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.name
        }
    }

    if (action.type === "ERROR") {
        return {
            ...state,
            error: action.error
        }
    }

    return state


}

export default reducer;