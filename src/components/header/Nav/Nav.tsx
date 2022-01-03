import { Link } from 'react-router-dom';
import './Nav.scss';

type NavProps = {
    namesOfLinks: string[];
    routes?: string[];
}

const Nav = ({ namesOfLinks, routes }: NavProps) => {
    return <nav className='nav'>
        {namesOfLinks.map((name, index) => {
            if (routes) {
                return <Link className='nav-link' to={`/${routes[index]}`}>{name}</Link>               
            }
            return <Link className='nav-link' to={`/${name}`}>{name}</Link>;
        })}
    </nav>
}

export default Nav;