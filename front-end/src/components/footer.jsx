import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import Logo from "./logo";
import { Link } from 'react-router-dom';
import SocialMediaLinks from './socialMediaLinks';

export default function Footer() {
    const pageLinks = {
        home: '/',
        about: '/about'
    };
    const socialMediaLinks = [
        {
            component: <FaXTwitter />,
            links: {
                Varun: 'https://twitter.com/_V_Chakraborty_',
                Tushar: 'https://github.com/DhawasTushar',
            }
        },
        {
            component: <FaGithub />,
            links: {
                Varun: 'https://github.com/Varun-Chakraborty',
                Tushar: 'https://github.com/Varun-Chakraborty',
            }
        },
    ]

    return (
        <footer>
            <hr className="dark:border-gray-700" />
            <div className="dark:text-white px-4">
                <div className="flex justify-around items-center p-3">
                    <Logo />
                    <div className="sites-to-visit ">
                        <div className="uppercase space-y-2">
                            <div className="font-bold">Pages</div>
                            <ul className="list-disc list-inside">
                                {Object.keys(pageLinks).map((page, index) => (
                                    <li key={index}>
                                        <Link to={pageLinks[page]}>
                                            {page}
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='dark:border-gray-700' />
                <div className="flex justify-between items-center px-14 py-3">
                    <div>@2024<Link to='/' className='hover:underline'>Vozify</Link></div>
                    <ul className="flex px-5">
                        {socialMediaLinks.map((eachSocialMedia, index) => (<SocialMediaLinks key={index} eachSocialMedia={eachSocialMedia} />))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}