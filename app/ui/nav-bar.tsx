"use client";
export default function NavBar() {
    const handleResume = () => {
        document.getElementById("Resume")?.click();
    }
    return (
        <div className="w-full fixed flex justify-end items-center py-3 backdrop-blur bg-nav">
         <a className="h-6 w-32 mr-auto ml-7 hover:cursor-pointer" href="#hero" >Isaac M'hamed</a>
            <nav className="w-1/3 mx-4 max-md:hidden">
                <ul className="list-none flex justify-between w-full text-green">
                    <li className="hover:translate-y-1 transition-all">01. <a className="hover:cursor-pointer no-underline text-white" href="#about">About</a></li>
                    <li className="hover:translate-y-1 transition-all">02. <a className="hover:cursor-pointer no-underline text-white" href="#projects">Projects</a></li>
                    <li className="hover:translate-y-1 transition-all">03. <a className="hover:cursor-pointer no-underline text-white" href="#connect">Connect</a></li>
                </ul>
            </nav>
            <button className="border-2 rounded mx-7 py-2 px-4  border-green text-green hover:cursor-pointer hover:bg-buttonfade hover:bg-opacity-50" onClick={handleResume} >Resume</button>
            <a id="Resume" href="../../../static/Isaac Mhamed Resume.pdf" target="_blank"/>
        </div>
    );
}
