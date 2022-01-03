type HeaderProps = {
    nav: JSX.Element;
}

const Header = ({ nav }: HeaderProps) => {
    return <header>
        {nav}
    </header>
}

export default Header;