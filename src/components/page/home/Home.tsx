import Header from "../../header/Header/Header";
import Nav from "../../header/Nav/Nav";

const Home = () => {
    const nav = <Nav namesOfLinks={["Home", "Projets", "A propos"]} routes={["/", "/projets", "/aPropos"]}/>
    return <>
        <h1>Home</h1>
        <Header nav={nav}/>
    </>
}

export default Home;