import Nav from '../Navigation/Nav';

const Header = () => {
    return <header>
        <Nav namesOfLinks={["Home", "Projets", "A propos"]} routes={["/", "/projects", "/aboutMe"]}/>
    </header>
}

export default Header;