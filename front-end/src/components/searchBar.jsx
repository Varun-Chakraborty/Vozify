import { useRef, useState } from "react";
import Button from "./button";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    const [inputField, setInputField] = useState('');
    const searchInputField = useRef();
    return (
        <Button
            className='flex py-1'
            onClick={() => {
                searchInputField.current.focus();
            }}>
            <div>
                <input
                    ref={searchInputField}
                    onChange={evnt => setInputField(evnt.currentTarget.value)}
                    className={"border-b py-1 transition-all origin-right outline-none bg-inherit "
                        + (inputField === '' ? " w-0 focus:mr-2 focus:px-1 focus:w-48 " : " mr-2 px-1 w-48 ")
                    }
                    type="text"
                    name="" id="" />
            </div>
            <CiSearch />
        </Button>
    );
}