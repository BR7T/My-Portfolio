'use client';
import {SiHtml5 , SiCss3 , SiPhp ,SiReact , SiJavascript , SiMysql , SiPython } from "react-icons/si"
import "./apres.css"

export function GridApresent(){
    return(
        <aside className="right-apresent" >
            
                <div className="language">
                    <h1>LINGUAGENS</h1>
                    <div className="detail"></div>
                    <div className="language-grid" >
                        <div className="cards-languages html" id="html">
                            <SiHtml5 className="icon"/>
                            <div className="caption">
                                <p>HTML</p>
                            </div>
                        </div>

                        <div className="cards-languages css">
                            <SiCss3 className="icon"/>
                            <div className="caption">
                                <p>CSS</p>
                            </div>
                        </div>
 
                        <div className="cards-languages php">
                            <SiPhp className="icon"/>
                            <div className="caption">
                                <p>PHP</p>
                            </div>
                        </div>

                        <div className="cards-languages react">
                            <SiReact className="icon"/>
                            <div className="caption">
                                <p>React</p>
                            </div>
                        </div>

                        <div className="cards-languages js">
                            <SiJavascript className="icon"/>
                            <div className="caption">
                                <p>Javascript</p>
                            </div>
                        </div>

                        <div className="cards-languages mysql">
                            <SiMysql className="icon" />
                            <div className="caption">
                                <p>MySQL</p>
                            </div>
                        </div>

                        <div className="cards-languages python">
                            <SiPython className="icon"/>
                            <div className="caption">
                                <p>Python</p>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>
    )
    
}




