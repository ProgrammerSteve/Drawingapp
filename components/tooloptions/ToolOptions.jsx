import { ToolOptionContainer } from "./ToolOptions.style"
import {useDispatch, useSelector} from 'react-redux'
import {setBrushSize, setBrushColor} from '../../redux/actions/brushActions'

const ToolOptions=()=>{
  const dispatch = useDispatch()
  const {brushSize,brushColor} = useSelector(state => state.brush)
  const handleBrushSize=(e)=>dispatch(setBrushSize(e.target.value))
  const handleBrushColor=(e)=>dispatch(setBrushColor(e.target.value))

  return(
  <ToolOptionContainer>
    <div>
      <div>
        <label>Brush Size</label>
        <input id="brush-size-range" type="range" min="1" onChange={handleBrushSize} value={brushSize}></input>
        <input id="brush-size-txt" type="number" min={0} onChange={handleBrushSize} value={brushSize}></input>
      </div>
      <div>
        <label>Color</label>
        <input type="color" onChange={handleBrushColor} value={brushColor}></input>
      </div>
    </div>
  </ToolOptionContainer>
  )
}

export default ToolOptions