import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="bg-skinn-one text-black p-4">
            <h1 className="text-center md:text-2xl">All Rights Reserved &copy; Quadiro Tech</h1>
            
            {/* <p className="text-center space-x-3 m-2">
            <Link to='/about'>About</Link>
            <span>|</span>
            <Link to='/contact'>Contact Us</Link>
            <span>|</span>
            <Link to='/policy'>Privacy Policy</Link>
            </p> */}
            <p className="flex justify-center space-x-6 m-2">
                <Link to='https://github.com/aatifahmad123'><img src="/github.png" alt="Github" className="w-6 h-6"/></Link>
                <Link to='https://www.linkedin.com/in/aatif-ahmad-2b8862282/'><img src="/linkedin.png" alt="Linkedin" className="w-6 h-6"/></Link>
                <Link to='https://x.com/ByteKnight18'><img src="/twitter.png" alt="twitter" className="w-6 h-6"/></Link>
            </p>
        </div>
    )
}