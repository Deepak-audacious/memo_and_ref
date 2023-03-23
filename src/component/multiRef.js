import React,{ useRef } from 'react'

const MultiRef = () => {
    
    const div1Ref = useRef(null);
    const div2Ref =useRef(null);
    const div3Ref = useRef(null)

    const changeColor = () => {
        div1Ref.current.style.backgroundColor = "red";
        div2Ref.current.style.backgroundColor = "green";
        div3Ref.current.style.backgroundColor = "blue";

    

    }
        return (
            <div>
                <div ref={div1Ref}>Div 1</div>
                <div ref={div2Ref}>Div 2</div>
                <div ref={div3Ref}>Div 3</div>
                <button onClick={() => changeColor(div1Ref,div2Ref,div3Ref)}>Change Color</button>
                
            </div>
        );
    }

    export default MultiRef
