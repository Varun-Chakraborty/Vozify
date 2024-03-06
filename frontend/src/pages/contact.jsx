import Button from "../components/button";
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="h-full flex items-center justify-center dark:text-white dark:bg-black">
            <div className="shadow-lg rounded-lg backdrop:opacity-45 flex relative gap-4 items-center h-72 aspect-video">
                <div className="h-full w-1/2 p-3 text-center rounded-lg flex flex-col gap-6 py-10 font-serif bg-slate-500 dark:bg-slate-200 text-white dark:text-black">
                    <h2 className="text-2xl font-bold">Get connected to us</h2>
                    <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <FaLocationArrow/>
                        <p>Fake San Francisco, 101451</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone/>
                        <p>123456789</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope/>
                        <p>abc@email.com</p>
                    </div>
                    </div>
                </div>
                <div className="h-full w-1/2 p-3 text-center rounded-lg flex flex-col justify-around font-serif">
                    <form
                        onSubmit={
                            evnt => {
                                evnt.preventDefault();
                            }
                        }
                        className="flex flex-col items-center gap-3"
                        action="" method="post">
                        <input
                            // onChange={handleInputFieldChange}
                            className="border dark:border-gray-600 p-1 rounded-lg outline-none bg-inherit"
                            type="email" name="email" id="email" required autoComplete="email" placeholder="Email" />
                        <textarea
                            // onChange={handleInputFieldChange}
                            className="border dark:border-gray-600 p-1 h-32 rounded-lg resize-none outline-none bg-inherit"
                            type="message" name="message" id="message" required placeholder="Enter Your Message" />
                        <Button>
                            <input
                                className="outline-none cursor-pointer"
                                type="submit" value="Submit" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}