import React, { useRef } from 'react';

const Ref = () => {
  const colorRef = useRef(null);
  const changeColor = () => {
    colorRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <div style={{width:"200px",height:"100px",border:"1px solid black",justifyContent:"center",textAlign:"center",display:"flex",backgroundColor:"green"}} ref={colorRef}>Jai Shri Raam</div>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Ref;