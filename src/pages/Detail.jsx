import { Link, useParams } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    console.log('id =>', id);

    return (
        <div>
            <h1>Detail Component</h1>
            <Link to="/">To Home</Link>
        </div>
    )
};

export default Detail;