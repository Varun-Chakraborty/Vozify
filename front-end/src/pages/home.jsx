import { FaFilePdf } from "react-icons/fa6";
import Logo from "../components/logo";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col justify-between items-center p-2 dark:text-white">
            <div className="flex h-64 flex-col items-center gap-24">
                <h2 className="uppercase text-2xl font-semibold text-center space-y-2">
                    <Logo />
                    <p>
                        Get the PDFs to have record of your business reviews.
                    </p>
                </h2>
                <div className="flex flex-col gap-2 items-center">
                    <Link to='/login'>
                        <button
                            className="bg-black font-bold hover:bg-gray-700 text-white dark:bg-white hover:dark:bg-gray-100 dark:text-black uppercase px-10 py-3 rounded-lg"
                            type="submit">
                            Give Your Review to Some Business
                        </button>
                    </Link>
                    <p className="font-serif">OR</p>
                    <Link to='/login'>
                        <button
                            className="bg-black font-bold hover:bg-gray-700 text-white dark:bg-white hover:dark:bg-gray-100 dark:text-black uppercase px-10 py-3 rounded-lg"
                            type="submit">
                            Register Your Business
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}