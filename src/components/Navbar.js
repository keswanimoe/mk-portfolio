import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return (
    <Nav
    variant="underline"
    className="justify-content-center" 
    activeKey="#about"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
            <Nav.Link href="#about" style={{ color: 'black' }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#projects" style={{ color: 'black' }}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#skills" style={{ color: 'black' }}>Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="#contact" style={{ color: 'black' }}>Contact</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}