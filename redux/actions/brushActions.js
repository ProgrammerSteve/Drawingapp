import {SET_BRUSH_COLOR,SET_BRUSH_SIZE} from '../types'

export const setBrushSize=(value)=>{
  return({
    type: SET_BRUSH_SIZE,
    payload: value,
  })
}
export const setBrushColor=(value)=>{
  return({
    type: SET_BRUSH_COLOR,
    payload: value,
  })
}
