import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import App1 from "./app1";
import App from "./flipkart";
function Hari(){
    return(
        <div>
            <Router>
                <Routes>
                <Route path="/" element={<App/>}/>
                    <Route path="/app1" element={<App1/>}/>                 
                </Routes>
            </Router>
        </div>
    )
}
export default Hari;