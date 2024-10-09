import Carousel from 'react-bootstrap/Carousel';
import Inavders1 from './images/makers-invaders1.png';
import Inavders2 from './images/makers-invaders2.png';
import Neuro1 from './images/ng1.png';
import Neuro2 from './images/ng2.png';
import Neuro3 from './images/ng3.png';
import Neuro4 from './images/ng4.png';
import Neuro5 from './images/ng-diagram.png';
import TermIcon from './images/terminal-icon.png';
// import { Row, Col } from 'react-bootstrap';

export default function Projects() {
    return (
        <section style={{ margin: "0 30px 0 30px"}}>
            <i>For a full list of my work including scientific algorithms, coding exercises and practise projects, check out my <a href="https://github.com/keswanimoe">GitHub</a></i>
            <a href="https://github.com/keswanimoe/makers_invaders">
                <h3 style={{ margin: "20px 0 0 0"}} >Makers Invaders</h3>
            </a>
            <p>A game inspired by the classic arcade game Space Invaders. 
                This was created at a Game Jam held at the Makers office so as a fun twist, you can play the classic Alien enemy or the Makers enemy!</p>
            <i>Technologies: Python (Pygame)</i>
            <div style={{ padding: '10px 0 40px 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={Inavders1} alt="Gameplay screenshots" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Inavders2} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <a href='https://github.com/keswanimoe/NeuroGames'>
                <h3>NeuroGames</h3></a>
            <p>An interactive memory 'snap' game, equipped with difficulty levels and animated backgrounds. 
                The game allows for timed gameplay and displays results once level is completed or time has run out. 
                Each game is fully customisable for time, difficulty, animation and background screens</p>
            <i>Technologies: Unity, C#</i>
            <div style={{ padding: '10px 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={Neuro1} alt="Gameplay screenshots" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro2} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro3} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro4} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro5} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div style={{margin:"20px 0 70px 0"}}> 
            <img className="term-icon" src={TermIcon} alt="Terminal App" style={{width: "15rem"}}/>
            <a style={{textDecoration: "none", color: "black", padding:"20px"}} href="https://github.com/fechachris4/downloading-money">
                <h2 className="wealthwizard"><span className="winner">Empower Pennies Hackathon Winner:</span> Wealth Wizard</h2>
            </a>
            <p style={{margin:"0 0 0 240px"}}>A terminal app which prompts a user to enter the file path to their monthly bank statement jpg or pdf file and using OCR technology and generative AI, extracts text from the file to output a categorised spending overview with financial advice based on spending</p>
            </div>
        </section>
    );
}