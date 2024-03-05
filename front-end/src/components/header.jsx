import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import { CiDark, CiLight, CiMenuBurger } from 'react-icons/ci'
import { useThemeContext } from "../contexts/themeContext";
import { FaUser } from "react-icons/fa6";
import Button from "./button";
import SearchBar from "./searchBar";
import { useState } from "react";

function toggleTheme(setTheme) {
    setTheme(previousState => previousState === 'light' ? 'dark' : 'light');
}

export default function Header() {
    const [openMenu, setMenuState] = useState(false);
    const { setTheme } = useThemeContext();
    const menu = {
        home: '',
        about: '/about',
        'contact us': '/contact',
    }
    return (
        <nav>
            <div className="flex justify-between items-center p-2 sticky top-0 dark:text-white">
                <Link to="/">
                    <Logo />
                </Link>
                <div>
                    <CiMenuBurger
                        onClick={()=>setMenuState(prev=>!prev)}
                        className={"md:hidden cursor-pointer relative z-50 transition-all " + (openMenu ? ' rotate-90 ':' rotate-0 ')} />
                    <ul className={"menu flex flex-col sm:flex-row absolute left-0 top-0 w-full bg-white dark:bg-slate-700 md:dark:bg-inherit md:static justify-center items-center gap-3 uppercase md:translate-y-0 transition-all duration-500 " + (openMenu ? ' translate-y-0 ':' -translate-y-full ')}>
                        {Object.keys(menu).map(
                            key => (
                                <li key={key} className="border-b sm:border-0">
                                    <NavLink className={({ isActive }) => (isActive ? '' : '')} to={menu[key]}>
                                        <Button>{key}</Button>
                                    </NavLink>
                                </li>
                            ))}
                        <li className="">
                            <SearchBar />
                        </li>
                        <li>
                            <Link to="/profile">
                                <Button>
                                    <FaUser />
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Button className="border" onClick={() => toggleTheme(setTheme)}>
                                <CiLight className="dark:hidden" />
                                <CiDark className="hidden dark:block" />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="dark:border-gray-700" />
        </nav>
    );
}