import GithubImage from './images/github.png';
import LILogo from './images/linkedin-logo.png';
import Email from './images/Email_icon.png';

export default function Contact() {
    return(
        <><div>
            <p>keswanimoe@hotmail.co.uk</p>
        </div>
        <div id="icons">
            <a href="https://github.com/keswanimoe">
                <img src={GithubImage} alt="GitHub" width="100" height="100" />
            </a>
            <a href="http://www.linkedin.com/in/moesha-keswani/">
                <img src={LILogo} alt="LinkedIn" width="100" height="100" />
            </a>

            <a href="mailto:keswanimoe@hotmail.co.uk">
                <img src={Email} alt="Email" width="100" height="100" />
            </a>

        </div></>
    );
}