import { Link } from "react-router-dom";

export default function LandingPage({handleClick}) {
    
    
    
    return (
        <Link to='/team'>
            <div onClick={handleClick} className="titlePage">
                Your journey in the world of Pokemon is about to begin!<i></i>
            </div>
        </Link>
    )
}