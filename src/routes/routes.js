import { Route, Routes } from "react-router-dom";
import App from "../App"

const RoutesApp = () => {
    return(
        <Routes>
            <Route exact path="/" element={<App/>}/>
        </Routes>
    )
}