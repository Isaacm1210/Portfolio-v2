export default function About() {
    return (
        <section id="about" className="w-2/5 min-w-80 h-128h m-auto pt-20 ">
            <h2 className="text-3xl font-medium mb-5 font"><span className="text-green">01. </span>About Me</h2>
            <p className="text-left text-base w-full ml-0">
                During my studies I gained in extensive knowledge and experience in a variety of different modern
                languages,
                frameworks and database technologies. I love a good challenge and solving complex problems, I
                believe that is the best way for me to enhance both my technical and business skills.
            </p>
            <div className="flex flex-col justify-evenly h-1/3">
                <h3 className="text-center text-lg font-semibold">My Tools</h3>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-8">
                    <li className="text-right">Java <i className="devicon-java-plain"></i></li>
                    <li><i className="devicon-javascript-plain"></i> JavaScript</li>
                    <li className="text-right">TypeScript <i className="devicon-typescript-plain"></i></li>
                    <li><i className="devicon-git-plain"></i> Git</li>
                    <li className="text-right">HTML5 <i className="devicon-html5-plain"></i></li>
                    <li><i className="devicon-css3-plain"></i> CSS3</li>
                    <li className="text-right">Next.JS <i className="devicon-nextjs-plain"></i></li>
                    <li><i className="devicon-react-original"></i> React.JS</li>
                    <li className="text-right">Node.JS <i className="devicon-nodejs-plain"></i></li>
                    <li><i className="devicon-express-original"></i> Express.JS</li>
                    <li className="text-right">MongoDB <i className="devicon-mongodb-plain"></i> </li>
                    <li> <i className="devicon-mysql-plain"></i> MySQL</li>
                </ul>
            </div>
        </section>
    )
}