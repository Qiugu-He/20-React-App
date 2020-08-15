import React, {useState} from 'react';

export default function Tab({children}){
    //state variable
    const [highlightStyle, setHightlightStyle] = useState({ left: 0, opacity: 0 });
  
    function moveHighlight(e){
      setHightlightStyle({
        left: e.nativeEvent.layerX - 150,
      })
    };
  
    function hideHighlight(e)  {
      setHightlightStyle({
        opacity: 0,
        left: e.nativeEvent.layerX - 150,
      })
    }
  
    return (
      <div className = "tab" onMouseOut = {hideHighlight} onMouseMove = {moveHighlight}>
          <div className="highlight" style={highlightStyle} />
          {children} {/*display child param*/}
      </div>
    );
  }