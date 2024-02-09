import backgroundImage from "/public/PPT.jpg"
import { IoDocumentTextOutline , IoEye  , IoCodeSlashOutline} from "react-icons/io5";


export function Breve(){
    return(
        
        <div className="CARD">
        <div className='capaBreve'><div className="loading"><div className="icon-loading"><IoCodeSlashOutline></IoCodeSlashOutline></div></div></div>
        <div className="CardContent">
            <div className="CardTitle"><p>Em Breve</p></div>
            <div className="CardButtons">
                <div className="DemoIcon" style={{cursor:"not-allowed"}}><IoDocumentTextOutline/></div>
                <div className="CodeIcon" style={{cursor:"not-allowed"}}><IoEye/></div>
            </div>


        </div>
    </div>
            
        
        
    )
}