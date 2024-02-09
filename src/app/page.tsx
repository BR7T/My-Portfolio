import {About} from "./components/About/about"
import { Projects } from "./components/Projects/proj";
import { Apresent } from "./components/Apresentation/apres";
import {Header} from "./components/Header/header"
import { Footer } from "./components/footer";


import styles from "./page.module.css";


export default function Home() {
  


  return (
    <main className={styles.main}>
      
      <Header></Header>
      
      <Apresent></Apresent>
      
      <About></About>

      <Projects></Projects>

      <Footer></Footer>

      
    </main>
    
  );
}




