import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Help(){
    return <div>      
        <Sidebar/>
        <div className="body">
            <Header content="Help"/>
            <p>This is Help Page.</p>
        </div>
        </div>
}