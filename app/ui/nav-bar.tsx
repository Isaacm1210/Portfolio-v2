export default function NavBar() {
    return (
        <div className="w-full fixed flex justify-end items-center py-3 backdrop-blur-sm">
            <nav className="w-1/3 mx-4 max-md:hidden">
                <ul className="list-none flex justify-between w-full text-green">
                    <li className="hover:cursor-pointer hover:translate-y-1 transition-all">01. <a className="no-underline text-white" href="#about">About</a></li>
                    <li className="hover:cursor-pointer hover:translate-y-1 transition-all">02. <a className="no-underline text-white" href="#projects">Projects</a></li>
                    <li className="hover:cursor-pointer hover:translate-y-1 transition-all">03. <a className="no-underline text-white" href="#connect">Connect</a></li>
                </ul>
            </nav>
            <button className="border-2 rounded mx-7 py-2 px-4  border-green text-green hover:bg-buttonfade hover:bg-opacity-50"><a>Resume</a></button>
        </div>
    );
}
