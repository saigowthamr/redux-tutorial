import { CHANGE_NAME, ADDNAME, ERROR } from './actionTypes'


export function changeName(name) {
    return {
        type: CHANGE_NAME,
        name: name
    }
}


export function addname() {
    return {
        type: ADDNAME
    }
}



export function error(msg) {
    return {
        type: ERROR,
        error: msg
    }
}