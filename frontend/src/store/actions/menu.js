import * as actionTypes from './actionTypes'

export const toggleMenu = () => (dispatch) => {
    dispatch({type : actionTypes.MENU_TOGGLE})
}