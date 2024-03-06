import { useLocation } from "react-router-dom"

export default function ShowSearchedInfo() {
    console.log(useLocation().search);
    let params = new URLSearchParams(useLocation().search);
    params = params.getAll('q');
    return (
        <div className="w-svw">
            {params.map(param => (
                <div key={param}>{param}</div>
            ))}
        </div>
    )
}