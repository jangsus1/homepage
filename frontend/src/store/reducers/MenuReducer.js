import * as actionTypes from '../actions/actionTypes';

const initialState = {
    menu_active : false
}

const MenuReducer = (state = initialState, action = actionTypes.DEFAULT) => {
    switch(action.type){
        case actionTypes.MENU_TOGGLE:
            return {...state, menu_active : !state.menu_active}
        default : break;
    }
    return {...state}
}

export default MenuReducer