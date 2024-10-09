import PythonPic from './images/Python.png';
import Csharp from './images/c-sharp.png';
import RubyPic from './images/ruby-logo.png';
import JSLogo from './images/JavaScript-logo.png';
import HTMLCSS from './images/css-html.png';
import SASLogo from './images/sas-logo.png';
import SQLogo from './images/sql-db-logo.png';
import MLLogo from './images/Rstudio-logo.png';
import RLogo from './images/Matlab_Logo.png';
import GitIcon from './images/Git-Icon.png';
import AWSLogo from './images/awslogo.png';
import DockerLogo from './images/dockerlogo.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  // Array of images
  const images = [PythonPic, Csharp, RubyPic, JSLogo, HTMLCSS, GitIcon, RLogo, SASLogo, SQLogo, MLLogo, AWSLogo, DockerLogo] ;

  return(
    <div>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx} style={{width: "15rem"}}>
            <img src={images[idx]} alt={`${idx}`} />
        </Col>
      ))}
    </Row>
    <div style={{ padding: '30px'}}>
    <h4>Problem-solving</h4>
    <p>During my time at university studying Mathematics, I frequently demonstrated strong problem-solving skills. One module in particular, ‘Plane Geometry’ provided a key opportunity to showcase these skills. I was presented with a challenging problem involving a parallelogram ABCD, with a point P and a midpoint M at the intersection of the diagonals. I was tasked with proving that area(PDC) = area(APC) + area(BAP) + area(BPD). To tackle this, I deconstructed the figure into smaller, more manageable shapes. Using the information provided and applying the Parallelogram Law, I calculated the areas of the smaller shapes I had created. By breaking the complex problem down into simpler components, I developed a logical proof through deduction, which earned me a first-class mark. This method of problem-solving by breaking down larger, complex tasks into smaller, digestible parts has become a key strategy in my approach to debugging complex code. In practice, I will isolate sections of code, simplifying the problem to find the root cause before building the solution step by step and I find this incredibly effective and efficient.</p>
    <h4>Attention to detail</h4>
    <p>In my previous role as a SAS programmer, I was responsible for deriving tables, listings, and figures based on specific client requirements, while ensuring adherence to CDISC standards. Part of my role involved quality-controlling the outputs before delivering them to the client. To ensure accuracy, I would meticulously spot-check calculated data, as well as titles, headers, and footers, verifying they matched the client-provided shells, a document detailing how the tables, listings, and figures should be presented. I would also scan for any inconsistencies or irregularities across groups of tables, including spelling, syntax, and column totals. This experience significantly sharpened my attention to detail, which has been invaluable in identifying and resolving errors before they reach the client. My attention to detail is particularly beneficial during the testing and deployment phase of projects, where I can quickly identify flaws or security risks in code, such as hardcoded credentials, and address them early, preventing potential issues and ensuring the integrity of the final product.</p>
    <h4>Teamwork</h4>
    <p>Following my participation in the Empower Pennies hackathon, several team members and I decided to continue developing the project beyond the event. Our objective was to refine the concept and conduct comprehensive market research, with the ultimate goal of pitching the idea to investors. We formed a small, diverse team with clearly defined roles, including strategy, design, technology, and community integration, while I took on the role of back-end developer. Given the size of our team and the multiple responsibilities we each carried, effective collaboration was essential. To ensure smooth progress, we established weekly stand-up meetings, maintained open and regular communication, and supported one another across different functions. For instance, during a week when our lead designer was unavailable, I stepped in to handle some design-focused tasks, allowing the project to stay on track. This collaborative approach enabled us to leverage each other’s strengths, maintain momentum, and foster a strong sense of trust and camaraderie within the team. Our teamwork has been pivotal in managing the project’s complexity, and it continues to be a key factor as we prepare to pitch our solution to potential investors.</p>
    <h4>Fast learner</h4>
    <p>In addition to my technical experience, I am proud of my ability to learn new technologies quickly and effectively. For example, during my final year at university, I was part of a small team tasked with developing a game for PJ Care using the Unity game engine. Although I had no prior experience with C#, I was determined to contribute technically to the project. I took the initiative to learn the language independently by following YouTube tutorials and completing the Codecademy C# course. This self-directed learning enabled me to write object-oriented C# code, and I played a key role in creating a 2D memory snap game equipped with animations, custom menu screens, and working in-game score displays. The project required regular testing and updates based on client feedback, which further honed my C# skills and allowed me to produce high-quality, clean code. The project earned a first-class mark, an achievement I’m proud to have contributed to from a technical and creative standpoint.</p>
    <h4>Creativity</h4>
    <p>While traveling across Japan, I spontaneously purchased a Japanese calligraphy brush pen, and began experimenting with doodles and drawings in my pocket sketchbook. Intrigued by the artistic possibilities, I challenged myself to improve my technique, sharpen my drawings, and refine my style, to transform these creations into something tangible and marketable. To achieve this, I taught myself Inkscape, a graphic design software similar to Adobe Illustrator, and began scanning my drawings using my phone as I didn’t have access to a scanner while on the go. I then turned these sketches into vector images and elevated them further by adding colour and enhancing the designs digitally. Taking it a step further, I compiled my favourite works into sticker sheets, manufactured them, and began selling them on Etsy and Instagram, primarily to the scrapbooking community my friends were a part of. The result was a successful venture that showcased my creativity and allowed me to adapt quickly to new technologies, turning my artistic passion into a profitable side business.</p>
    </div>
    </div>
    );
}
