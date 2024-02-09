import "./apres.css"
import {SiWhatsapp , SiLinkedin , SiGithub , SiGmail} from "react-icons/si";
import { GridApresent } from "./grid";



export function Apresent(){
    return (
        <article className="apresentation" >
            <aside className="left-apresent">
                <div className="apresent-title">
                    <p>Me chamo</p> 
                    <p id="name-area"><span id="name">Victor <br /> Buratini</span></p>
                    <p>e sou um programador Front-end</p>
                </div>
                <div className="social-links">
                    <a href="https://wa.me/+5519992247075/?text=Ol%C3%A1!%20Gostei%20do%20seu%20site!" target="_blank"><SiWhatsapp/></a>
                    <a href="https://www.linkedin.com/in/victor-buratini-965623276/"><SiLinkedin/></a>
                    <a href="https://github.com/BR7T"><SiGithub/></a>
                    <a href="#"><SiGmail/></a>
                </div>
            </aside>
            <hr />
            <GridApresent/>
        </article>
    )
}