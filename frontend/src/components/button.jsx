export default function Button({ onClick, children, className }) {
    return (
        <div
            onClick={onClick}
            className={"cursor-pointer p-3 rounded-lg hover:bg-slate-100 hover:dark:bg-slate-800 hover:shadow-xl flex items-center " + className}>
            {children}
        </div>
    );
}