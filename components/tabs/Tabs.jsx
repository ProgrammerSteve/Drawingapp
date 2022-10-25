import { useState } from "react";
import { TabDiv } from "./Tabs.style";


const Tabs=()=>{
  const tabEnum=[
    {tab:'tab1',name:'Tab1'},
    // {tab:'tab2',name:'Tab2'},
    // {tab:'tab3',name:'Tab3'},
    // {tab:'tab4',name:'Tab4'},
  ]
  const [selected, setSelected]=useState(tabEnum[0].tab)
  const handleSelect=({target:{className}})=>{setSelected(className)}
  return(
    <>
    <TabDiv selected={selected} tabEnum={tabEnum}>
      { 
        tabEnum.map(obj=>
          <div className={obj.tab} key={obj.name} onClick={handleSelect}>
            <span>
              {obj.name}
              </span>
          </div>
        ) 
      }
      <div className="highlight"></div>
    </TabDiv>
    </>
  )
}

export default Tabs;