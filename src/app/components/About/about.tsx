import "./about.css"
import image from "/public/Thinking-face-cuate.svg"

export function About(){
    return(
        <article>
            <div className="about-img">
                <div className="image-circle" style={{
                    background:`url(${image.src})`
                }}></div>
            </div>
            <div className="about-text">
                <h1>Quem sou eu?</h1>
                <div className="detail"></div>
                <p>Tenho 18 anos e atualmente estudo na Fundação Indaiatubana de Arte e Cultura (FIEC), no curso técnico de Tecnologia da Informação. Como desenvolvedor Front-end tenho a experiência de projetos pessoais onde obtive um amadurecimento e um olhar diferente para o design e construção de sites.<br/>
                Sou um entusiasta de novas tecnologias e novas linguagens, além de ser muito adaptativo a novos ambientes e estar sempre aberto a opniões construtivas.
                </p>
            </div>
        </article>
    )
}