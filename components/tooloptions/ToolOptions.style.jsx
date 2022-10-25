import styled, {css} from "styled-components";

export const ToolOptionContainer=styled.form`
  width:100%;
  height:100%;
  background-color: #274a48;
  display: grid;
  place-content: center;

  &>div{
    display:flex;
    gap:15px;
  }

  & div div{
    display: flex;
    align-items: center;
    gap:5px;
    color:white;
  }

  #brush-size-txt{
    width: 50px;
  }
  #brush-size-range{
    fill:'green';
    background-color: red;
  }
`