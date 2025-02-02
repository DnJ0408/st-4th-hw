import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <Link to="/detail">To Detail</Link>
            <br />
            <Link to="/about">To About</Link>
        </div >
    )
}

export default Home;