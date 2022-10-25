import styled, { css } from "styled-components";
const getLeft=(selected,tabEnum)=>{
  const numDiv= tabEnum.length;
  const pos= parseFloat(selected.slice(-1));
  const placement=(pos-1)*100/numDiv;
  return(`${placement}%`)
}
const getWidth=(tabEnum)=>{
  const numDiv= tabEnum.length;
  return(`${100/numDiv}%`)
}
const posIndex=css` ${props => (props.selected && props.tabEnum)? 
css`
  background-color: blue;
  left:${getLeft(props.selected,props.tabEnum)};
` :css`background-color: #ff0000;`};`;



export const TabDiv=styled.div`
  background-color: #131361;
  color:white;
  display:flex;
  justify-content: space-evenly;
  position:absolute;
  bottom:0;
  right: 0;
  cursor:pointer;
  
  width: 75%;
  height: 30%;
  div[class^='tab'] span{
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  & div[class^='tab']{
    background-color: #131361;
    display: grid;
    place-items:center;
    width:100%;
  }
  & div[class^='tab']:hover{
    background-color: #090923;
  }
  & .highlight{
    position: absolute;
    top:100%;
    transform: translateY(-100%);
    ${props => (props.tabEnum)? css`width:${getWidth(props.tabEnum)};`:css`width:100%;`};
    height: 5px;
    ${posIndex};
    transition: all 0.25s ease-in-out;
  }
`