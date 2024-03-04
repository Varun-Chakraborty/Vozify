import { Link, useRouteError } from "react-router-dom";

export default function ErrorComponent() {
    const error = useRouteError();
    return (
        <>
            <p>this seems to be an error</p>
            <p>report this error at <Link className="hover:underline" to="https://github.com/Varun-Chakraborty">Github</Link></p>
        </>
    )
}