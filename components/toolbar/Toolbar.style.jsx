import styled, { css } from "styled-components";


export const ToolbarContainer=styled.div`
  height: 520px;
  width:100px;
  background-color: #3e5c67;
  border-radius: 3px 0 0 3px;
  padding:5px 5px;
  cursor:pointer;

  display: flex;
  flex-direction: column;

& div{
  width:100%;
  height:75px;
  background-color: #223f47;
  display: grid;
  place-content: center;
  border-radius: inherit;
  
}

& div:hover{
  transform: scale(110%);
  background-color: #25444d;
}
`

