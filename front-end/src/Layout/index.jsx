import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
    return (
        <div className="min-h-lvh flex flex-col justify-between dark:bg-black dark:text-white">
                <Header />
            <Outlet />
            <div>
                <Footer />
            </div>
        </div>
    );
}