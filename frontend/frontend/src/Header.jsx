import './index.css';
import {Link} from "react-router-dom";

function Header() {

    return(
        <div className='header'>
            <div className='title'>Anime Artistry</div>
            <div className='nav'>
                <Link to="/">Home</Link>
                <Link to="/artist">Artist</Link>
                <Link to="/work">Work</Link>
                <Link to="/request">Request</Link>
            </div>
        </div>
    )
}

export default Header