import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function Card(prop) {
    return (
        <>
            <div className="bg-blue-400 dark:bg-white p-4 rounded-xl">
                <h1 className="text-center font-bold text-xl mb-3 uppercase">{prop.player}</h1>
                <div className="flex flex-col rounded-xl">
                    <button id={'up' + prop.id} onClick={prop.up} className="w-44 text-white font-bold bg-slate-800 p-4 justify-center flex active:bg-slate-900 rounded-t-xl"><IoMdArrowDropup /></button>
                    <div className="py-10 justify-center flex text-5xl font-bold">
                        {prop.children}
                    </div>
                    <button id={'down' + prop.id} onClick={prop.down} disabled={prop.dis} className="disabled:cursor-not-allowed disabled:bg-slate-900 w-44 text-white font-bold bg-slate-800 p-4 justify-center flex active:bg-slate-900 rounded-b-xl"><IoMdArrowDropdown /></button>
                </div>
            </div>
        </>
    )
}
