export default function ToolBubble({tool}: {tool: string}){
    return (
        <div className="text-xs rounded-xl bg-buttonfade w-fit p-1 text-green font-medium m-1">
            {tool}
        </div>
    )
}

