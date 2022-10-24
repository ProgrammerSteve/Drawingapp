import React, { useEffect, useState, useRef, lazy } from 'react'
export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [xPos, setXPos]=useState(null);
  const [yPos, setYPos]=useState(null);
  const [lazyPoints, setLazyPoints]=useState([]);
  const canvasRef = useRef(null)
  useEffect(()=>{
    const canvas = canvasRef.current
    canvas.width=500;
    canvas.height=500;
  },[])
  useEffect(() => {
    const canvas = canvasRef.current
    const handleMove=(event) =>{setXPos(event.offsetX);setYPos(event.offsetY);}
    window.addEventListener('mousemove', handleMove);
    return(()=>window.removeEventListener('mousemove', handleMove));
  }, [])
  useEffect(()=>{
    // console.log('lazyPoints:',lazyPoints)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 5;
    ctx.strokeStyle="blue"
    const maxIndex=lazyPoints.length-1;
    if(lazyPoints.length>1){
      ctx.moveTo(lazyPoints[maxIndex-1].x,lazyPoints[maxIndex-1].y);
      ctx.lineTo(lazyPoints[maxIndex].x,lazyPoints[maxIndex].y);
      ctx.stroke();
    }
  },[lazyPoints])
  const handleReset=()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 500, 500);
  }
  const handleMouseDown=() =>{
    setIsClicked(true);
    setLazyPoints(lazyPoints=>[...lazyPoints, {x:xPos,y:yPos}])
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(xPos, yPos, 2.5, 0, 2 * Math.PI);
    ctx.fill();
  }
  const handleMouseMove=()=>{
    if(isClicked){
      setLazyPoints(lazyPoints=>[...lazyPoints, {x:xPos,y:yPos}])
    }
  }
  const handleMouseUp=() =>{
    setIsClicked(false);
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(xPos, yPos, 2.5, 0, 2 * Math.PI);
    ctx.fill();
    setLazyPoints(lazyPoints=>[])
  } 
  return (
    <div style={{display:"grid", placeItems:"center"}}>
      <canvas 
      ref={canvasRef}
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp} 
      onMouseMove={handleMouseMove} 
      style={{
        border:"2px solid black", 
        width:'500px', 
        height:'500px'
      }} 
      id="myCanvas"/>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}





















 // useEffect(()=>{
  //   var canvas = document.getElementById("myCanvas");
  //   var ctx = canvas.getContext("2d");

  //   // Gradients
  //   var grd = ctx.createLinearGradient(0, 0, 200, 0);
  //   grd.addColorStop(0, "red");
  //   grd.addColorStop(1, "white");
  //   ctx.fillStyle = grd;
  //   ctx.fillRect(0, 0, 500, 375);

  //   var c_grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  //   c_grd.addColorStop(0, "blue");
  //   c_grd.addColorStop(1, "green");
  //   ctx.fillStyle = c_grd;
  //   ctx.fillRect(70, 70, 100, 100);

  //   //TEXT
  //   ctx.fillStyle = 'black';
  //   ctx.font = "30px Arial";
  //   ctx.fillText("Hello", 200, 50);

  //   ctx.fillStyle = 'black';
  //   ctx.font = "30px Arial";
  //   ctx.strokeText("Hello", 100, 50);

  //   ctx.font = "30px Comic Sans MS";
  //   ctx.fillStyle = "grey";
  //   ctx.textAlign = "center";
  //   ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

  //   //draw line
  //   ctx.fillStyle = "black";
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(150, 75);
  //   ctx.stroke();

  //   //draw circle
  //   ctx.fillStyle = "blue";
  //   ctx.beginPath();
  //   ctx.arc(95, 50, 20, 0, 2 * Math.PI);
  //   ctx.stroke();
  // },[])