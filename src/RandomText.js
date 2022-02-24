import React, { useEffect, useState } from 'react'
import { Random } from 'react-animated-text';
import Nowar from "./nowar.svg"

export const RandomText = () => {
    const word = ['#savaşa hayır', '#no war', '#没有战争', "#no a la guerra", "#sem guerra", "#нет войны", "#kein krieg", "#pas de guerre"];
    const [words, setWords] = useState("#savaşa hayır");

    useEffect(() => {
        setInterval(() => {
            setWords(word[Math.floor(Math.random() * word.length)])
        }, 4000);
    }, []);

    const stylesheet = {
        display: 'flex',
        fontSize: "5rem",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        // cursor: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 87.5 87.5' style='enable-background:new 0 0 87.5 87.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23BE1622;%7D%0A%3C/style%3E%3Cpath class='st0' d='M43.8,0C19.6,0,0,19.6,0,43.8s19.6,43.8,43.8,43.8s43.8-19.6,43.8-43.8S67.9,0,43.8,0z M43.8,10 c7,0,13.6,2.2,19,5.9L15.9,62.8c-3.7-5.4-5.9-12-5.9-19C10,25.1,25.1,10,43.8,10z M43.8,77.5c-8,0-15.3-2.8-21.1-7.4l47.4-47.4 c4.6,5.8,7.4,13.1,7.4,21.1C77.5,62.4,62.4,77.5,43.8,77.5z'/%3E%3C/svg%3E%0A"), auto`,
        backgroundColor: "black",
    }
    return (
        <pre style={stylesheet}>
            <Random style={{ cursor: "url(" + Nowar + "), auto" }}
                effect="verticalFadeIn"
                effectDirection="down"
                effectChange={0.1}
                text={words}
                iterations={1}
            />
        </pre>
    )
}
export default RandomText