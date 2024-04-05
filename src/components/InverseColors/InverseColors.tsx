import React, { useEffect, useState } from "react";
import "./InverseColors.css"
  function InverseColors(){
    const [valueR, setValueR] = useState(0);
    const [valueG, setValueG] = useState(0);
    const [valueB, setValueB] = useState(0);
    const setValues = (hexC:string, color:string)=>{
        if(color == "red"){
            setValueR(parseInt(hexC));
        }
        if(color == "green"){
            setValueG(parseInt(hexC));
        }
        if(color == "blue"){
            setValueB(parseInt(hexC));
        }
    }
    useEffect(()=>{
        const updateColors = (colorValue:number, whichColor:string)=>{
                const hexColor = ("0" + colorValue.toString(16)).slice(-2);
                let bgColor = "#";
                switch(whichColor){
                    case "red":
                        bgColor += hexColor + "0000";
                        break;
                    case "green":
                        bgColor+="00" + hexColor + "00";
                        break;
                    case "blue":
                        bgColor+="0000" + hexColor;
                        break;
                    default:
                        break;
                }
                const element = document.getElementById(`${whichColor}-text`) as HTMLDivElement;
                element.style.background = bgColor;
                element.style.color = ""
        };
        const setGlobalBackground = ()=>{
            const element = document.getElementById("colores") as HTMLDivElement;
            element.style.background = "#" + ("0" + valueR.toString(16)).slice(-2) + ("0" + valueG.toString(16)).slice(-2) + ("0"+valueB.toString(16)).slice(-2);
        }
        const textColor = () => {
            const inverseColor = "#" + 
                ("0" + (255 - valueR).toString(16)).slice(-2) + 
                ("0" + (255 - valueG).toString(16)).slice(-2) + 
                ("0" + (255 - valueB).toString(16)).slice(-2);
        
            const element = document.getElementById("text-color") as HTMLDivElement;
            element.style.color = inverseColor;
            const elementButton = document.getElementById("button-randomize") as HTMLButtonElement;
            elementButton.style.background = inverseColor;
            elementButton.style.color = "#" + ("0" + valueR.toString(16)).slice(-2) + ("0" + valueG.toString(16)).slice(-2) + ("0"+valueB.toString(16)).slice(-2);
        }
        updateColors(valueR, "red");
        updateColors(valueG, "green");
        updateColors(valueB, "blue");
        setGlobalBackground();
        textColor();
    }, [valueR, valueG, valueB]);
    const randomizeValue = ()=>{
        setValueR(Math.floor(Math.random()*256));
        setValueG(Math.floor(Math.random()*256));
        setValueB(Math.floor(Math.random()*256));

    }
    return(
        <div className="colores" id="colores">
            <div>
                <button className="button-randomize" id="button-randomize"
                onClick={(e)=>{
                    randomizeValue();
                }}>Randomize</button>
            </div>
            <div className="sliders">
                <div className="slidecontainer">
                    <input type="range" min="0" max="255" onChange={(e)=>(
                        setValues(e.target.value, "red")
                    )} value={valueR} className="sliderA" id="myRangeA"></input>
                    <div id="red-text">{"RED\n" + ("0" + valueR.toString(16)).slice(-2)}</div>
                </div>

                <div className="slidecontainer">
                    <input type="range" min="0" max="255" onChange={(e)=>(
                        setValues(e.target.value, "green")
                        )} value={valueG} className="sliderB" id="myRangB"></input>
                    <div id="green-text">{"GREEN\n" + ("0" + valueG.toString(16)).slice(-2)}</div>
                </div>

                <div className="slidecontainer">
                    <input type="range" min="0" max="255" onChange={(e)=>(
                        setValues(e.target.value, "blue")
                        )} value={valueB} className="sliderC" id="myRangeC"></input>
                    <div id="blue-text">{"BLUE\n" + ("0" + valueB.toString(16)).slice(-2)}</div>
                </div>
            </div>
            <div className="text-color" id="text-color">
                <p>Color: #{("0" + valueR.toString(16)).slice(-2) + ("0" + valueG.toString(16)).slice(-2) + ("0"+valueB.toString(16)).slice(-2)}</p>
            </div>
        </div>
    );
}
export default InverseColors;