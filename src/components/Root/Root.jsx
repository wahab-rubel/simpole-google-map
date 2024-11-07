import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Root() {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <Banner />
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;