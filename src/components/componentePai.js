import React from "react";
import componenteFilho from "./componenteFilho";

function ComponentePai(props) {
    return (
        <div>
            <h2>{props.terceira}</h2>
            <componenteFilho  
                quinta={"Essa props será renderizada no ComponenteFilho.js"}
                sexta={props.quarta}
            />
        </div>
    )
}

export default ComponentePai