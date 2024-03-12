import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import SimpleFooter from "../pages/Shared/Footer/SimpleFooter";

const Main = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
            <SimpleFooter></SimpleFooter>
        </div>
    );
};

export default Main;