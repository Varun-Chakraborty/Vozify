import { useState } from "react";
import Button from "./button";
import ToolTip from "./toolTip";
import { Link } from "react-router-dom";

export default function SocialMediaLinks({ eachSocialMedia }) {
    const [showMenu, setShowMenu] = useState(false);
    const [timer, setTimer] = useState(null);

    const handleMouseOver = () => {
        setShowMenu(true);
        clearTimeout(timer);
    }

    const handleMouseLeave = () => {
        setTimer(setTimeout(() => {
            setShowMenu(false);
        }, 50));
    }

    return (
        <li
            className="relative"
            onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <Button>
                {eachSocialMedia.component}
            </Button>
            <ToolTip className={"origin-bottom transition-all " + (showMenu ? "scale-100" : "scale-0")}>
                {
                    Object.keys(eachSocialMedia.links).map((name, index) => (
                        <Link key={index} className='flex items-center gap-2' target='_blank' to={eachSocialMedia.links[name]}>
                            <Button className="z-50">
                                {name}
                            </Button>
                        </Link>
                    ))
                }
            </ToolTip>
        </li>
    );
}