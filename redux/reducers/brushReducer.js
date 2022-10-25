import {SET_BRUSH_COLOR,SET_BRUSH_SIZE} from '../types'

const initialState = {
    brushSize:10,
    brushColor:'black'
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_BRUSH_COLOR:
        return {
            ...state,
            brushColor:action.payload,
        }
        case SET_BRUSH_SIZE:
            return{
              ...state,
              brushSize:+action.payload,
            }
        default: return state
    }
}