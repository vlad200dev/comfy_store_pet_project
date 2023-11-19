import {Outlet} from "react-router-dom";


const HomeLayout = () => {
    return (
        <>
            <nav>
                <span className="text-4xl text-primary">Simple Marketplace</span>
            </nav>
            <Outlet/>
        </>
    );
};

export default HomeLayout;