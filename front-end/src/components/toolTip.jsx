export default function ToolTip({ children, className }) {
    return (
        <div className={"absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full flex bg-slate-200 dark:bg-slate-700 rounded-xl before:absolute before:h-3 before:aspect-square before:rotate-45 before:bg-inherit before:top-full before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 p-2 space-x-2 " + className}>
            { children }
        </div>
    );
}