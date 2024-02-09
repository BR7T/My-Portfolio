'priority'

import "./header.css"
import Image from "next/image"

export function Header(){
    return(
        <div className="header">
        <div className="name">
          <Image
          src="/Logo-removebg-preview.png"
          alt="LOGO"
          width={777}
          height={777}
          />
        </div>
        <div className="links-header">
            <a href="/src/app/projetos.tsx">HOME</a>
            <a href="#">SOBRE</a>
            <a href="#">PROJETOS</a>
        </div>
      </div>
    )
}
