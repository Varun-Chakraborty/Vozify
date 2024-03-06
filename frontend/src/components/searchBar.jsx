import { useRef, useState } from "react";
import Button from "./button";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [inputData, setInputData] = useState('');
    const searchInputField = useRef();
    const submitButton = useRef();
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleClick = (evnt) => {
        if (!isExpanded) {
            // Expand the search bar and focus on the text field
            setIsExpanded(true);
            searchInputField.current.focus();
        } else if (inputData === '') {
            // Contract the search bar only if there's no text in the field
            setIsExpanded(false);
        }
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        inputData ? navigate(`/search?q=${encodeURIComponent(inputData.trim())}`) : searchInputField.current.blur();
    }

    return (
        <Button
            className=''
            onClick={handleClick}>
            <form
                className='flex items-center'
                onSubmit={handleSubmit}
                action="">
                <input
                    ref={searchInputField}
                    onChange={evnt => setInputData(evnt.currentTarget.value)}
                    className={"border-b transition-all origin-right outline-none bg-inherit "
                        + (isExpanded ? "mr-2 px-1 w-48" : "w-0 focus:mr-2 focus:px-1 focus:w-48")}
                    required
                    type="text"
                    name=""
                    id="" />
                <button ref={submitButton} className={isExpanded ? "bg-slate-300 p-1 rounded-full":""} type="submit">
                    <CiSearch />
                </button>
            </form>
        </Button>
    );
}