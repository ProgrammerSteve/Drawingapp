import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import Toolbar from '../components/toolbar/Toolbar';
import { useSelector} from 'react-redux'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [xPos, setXPos]=useState(null);
  const [yPos, setYPos]=useState(null);
  const [lazyPoints, setLazyPoints]=useState([]);
  const canvasRef = useRef(null)
  const {brushSize,brushColor} = useSelector(state => state.brush)
  const [canvasCtx,setCanvasCtx]=useState({});

  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.width=700;
    canvas.height=500;
  },[])
  useEffect(()=>{
    const ctx=canvasRef.current.getContext('2d');
    ctx.lineWidth =brushSize;
    ctx.strokeStyle=`${brushColor}`;
    ctx.fillStyle = `${brushColor}`;
    setCanvasCtx(ctx)
  },[brushColor,brushSize])
  useEffect(() => {
    const handleMove=(event) =>{setXPos(event.offsetX);setYPos(event.offsetY);}
    window.addEventListener('mousemove', handleMove);
    return(()=>window.removeEventListener('mousemove', handleMove));
  }, [])
  useEffect(()=>{
    const maxIndex=lazyPoints.length-1;
    if(lazyPoints.length>1){
      canvasCtx.moveTo(lazyPoints[maxIndex-1].x,lazyPoints[maxIndex-1].y);
      canvasCtx.lineTo(lazyPoints[maxIndex].x,lazyPoints[maxIndex].y);
      canvasCtx.stroke();
    }
  },[lazyPoints, brushColor,brushSize])

  const handleReset=()=>{
    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(0, 0, 700, 500);
  }
  const handleMouseDown=() =>{
    setIsClicked(true);
    setLazyPoints(lazyPoints=>[...lazyPoints, {x:xPos,y:yPos}])
    canvasCtx.beginPath();
    canvasCtx.arc(xPos, yPos, `${brushSize*0.5}px` , 0, 2 * Math.PI);
    canvasCtx.fill();
  }
  const handleMouseMove=()=>{
    if(isClicked){
      setLazyPoints(lazyPoints=>[...lazyPoints, {x:xPos,y:yPos}])
    }
  }
  const handleMouseUp=(brushSize) =>{
    setIsClicked(false);
    canvasCtx.beginPath();
    canvasCtx.arc(xPos, yPos, `${brushSize*0.5}px` , 0, 2 * Math.PI);
    canvasCtx.fill();
    setTimeout(()=>{
      if(isClicked){
        setLazyPoints(lazyPoints=>[])
      }
    },100)
  } 

  return (
    <div style={{
        display:"grid", 
        placeItems:"center", 
        height:'100%',
        backgroundColor:"none"
      }}>
              <div style={{
                display:'flex',
                justifyContent:'center'
              }}>
                  <Toolbar/>
                  <div style={{
                    display:'flex',
                    flexDirection:"column"
                  }}>
                    <canvas 
                    ref={canvasRef}
                    onPointerDown={handleMouseDown} 
                    onPointerUp={handleMouseUp.bind(this,brushSize)} 
                    onPointerMove={handleMouseMove} 
                    
                    style={{
                      border:"2px solid black", 
                      width:'700px',
                      height:'500px',
                      cursor:'pointer'
                    }} 
                    id="myCanvas"/>
                    <div onClick={handleReset} style={{
                      width:"100%",
                      height:"20px",
                      color:"white",
                      backgroundColor:"#2d5050",
                      display:"flex",
                      justifyContent:"center",
                      userSelect:"none"
                    }}>Reset</div>
                  </div>
              </div>
    </div>
  )
}
