import { Breve } from "./emBreve"
import "./proj.css"
import { SiGithub } from "react-icons/si";
import { IoDocumentTextOutline , IoEye  } from "react-icons/io5";


const projetos = ['Taskmanager' , 'Pedra, Papel, Tesoura' , 'Jogo da Velha' , 'Blackleaf']
const imgs = [  '/images/imagemTeste.jpg',
                '/images/PPT.jpg',
                '/images/imagemTeste.jpg',
                '/images/PPT.jpg'] 

const links = ['https://br7t.github.io/Taskmanager/']


const Projs = [
    {id:1,title: "BlackLeaf" , img: '' , linkDemo:'https://br7t.github.io/BlackLeaf/', linkCode:'https://github.com/BR7T/BlackLeaf'},
    {id:2,title: "IndaiaSpots" , img: '' , linkDemo:'https://br7t.github.io/IndaiaSpots/', linkCode:'https://github.com/BR7T/IndaiaSpots'},
    {id:3,title: "Taskmanager" , img: '' , linkDemo:'https://br7t.github.io/Taskmanager/', linkCode:'https://github.com/BR7T/Taskmanager'}
]
export function Projects(){
    

    return(
        <div className="project">
            <h1>PROJETOS</h1>
            <div className="detail"></div>
            <div className="project-grid">
                

                {
                    Projs.map((card) => {

                        
                        return(
                            <div className="card-proj">
                                <div className="CARD" >
                                    <div className='capaProjeto' key={card.id} style={{
                                        backgroundImage: `url(${card.img})`
                                        }}></div>
                                    <div className="CardContent">
                                     <div className="CardTitle"><p>{card.title}</p></div>
                                        <div className="CardButtons">
                                            <div className="subtitle-proj">
                                                <a href={card.linkCode}  className="CodeIcon" target="_blank"><IoDocumentTextOutline/>
                                                <p className="LegendaProjBtn">Ver Código</p></a>
                                                
                                            </div>

                                            <div className="subtitle-proj">
                                                <a href={card.linkDemo} className="DemoIcon" target="_blank"><IoEye/>
                                                <p className="LegendaProjBtn">Ver Projeto</p>
                                                </a>
                                                
                                            </div>
                                        
                                        
                                        </div>


                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="card-proj">
                    <Breve></Breve>
                </div>
                <div className="card-proj">
                    <Breve></Breve>
                </div>
                
                
            </div>
            <div className="buttonArea">
                <a href="https://github.com/BR7T" className="buttonRepo">Acessar repositório do Github <span><SiGithub></SiGithub></span></a>
            </div>
        </div>
    )
}

