import React from 'react';
import { useEffect, useState } from 'react';


function Topbutton() { 
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        });
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth",
        })
    }
    return (
    <div className="App">
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "100px",
                right:"100px",
                height: "100px",
                width: "100px",
                fontsize:"100px",

            }}
            onClick={scrollUp}
            
            >
                
                ^</button>
        )}
    </div>
    );
}

export default Topbutton;