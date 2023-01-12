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
    <div className="scroll">
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "500px",
                right:"500px",
                height: "500px",
                width: "500px",
                fontsize:"500px",

            }}
            onClick={scrollUp}
            
            >
                
                ^</button>
        )}
    </div>
    );
}

export default Topbutton;