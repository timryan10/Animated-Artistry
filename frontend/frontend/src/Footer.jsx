import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <footer>
            <div className='footer'>
                <span> &copy; 2024 Anime Artistry. All rights reserved</span>
                <div className='icon'>
                    <a href="https://www.instagram.com/hurley___21/">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#f7f2f2",}} />
                    </a>
                    <a href='https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Filenecustomart&e=AT1uaLJdUy7te_DuETmZCWNE7Qv9q8mtFvNWjnjnjBEKxPnxj9q3DsilP1_hmvRzKNmFJqRPU6cSpJYc3ZpVCj8p5p2_tP9iIRgcSmtElBXge90Y'>
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#f7f2f2"}}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer