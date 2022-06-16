import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home(){
    return <div>      
        <Sidebar/>
        <div className="body">
            <Header content="Home"/>
            <p>This is Home Page.</p>
        </div>
        </div>
}